$files = Get-ChildItem -Path .github\workflows\*.yml

foreach ($file in $files) {
    $content = Get-Content $file.FullName
    $newContent = @()
    foreach ($line in $content) {
        if ($line -match 'uses:\s*([^@]+)@([a-zA-Z0-9_\-\.]+)\s*(#.*)?$') {
            $repo = $matches[1].Trim()
            $tag = $matches[2].Trim()
            
            if ($tag -match '^[0-9a-f]{40}$') {
                $newContent += $line
                continue
            }

            if ($tag -eq 'cargo-llvm-cov') {
                $newContent += $line
                continue
            }
            
            Write-Host "Resolving $repo@$tag..."
            $sha = ""
            try {
                $out = git ls-remote "https://github.com/$repo.git" "refs/tags/$tag*" 2>$null
                $peeled = $out | Select-String "\^{}$" | Select-Object -First 1
                if ($peeled) {
                    $sha = ($peeled -split "\s+")[0]
                } else {
                    $first = $out | Select-Object -First 1
                    if ($first) { $sha = ($first -split "\s+")[0] }
                }
                if (-not $sha) {
                    $outHead = git ls-remote "https://github.com/$repo.git" "refs/heads/$tag" 2>$null
                    $firstHead = $outHead | Select-Object -First 1
                    if ($firstHead) { $sha = ($firstHead -split "\s+")[0] }
                }
            } catch {}

            if ($sha) {
                $newLine = $line -replace "uses:\s*$repo@$tag", "uses: $repo@$sha # $tag"
                $newContent += $newLine
                Write-Host "  -> $sha"
            } else {
                $newContent += $line
                Write-Host "  -> Not found"
            }
        } else {
            $newContent += $line
        }
    }
    Set-Content -Path $file.FullName -Value $newContent
}
