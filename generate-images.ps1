$ErrorActionPreference = 'Stop'

$students = @(
    @{ Name = 'shivam'; Label = 'Shivam'; Color = 'RoyalBlue' },
    @{ Name = 'rahul'; Label = 'Rahul'; Color = 'Teal' },
    @{ Name = 'shubham'; Label = 'Shubham'; Color = 'Purple' },
    @{ Name = 'ankit'; Label = 'Ankit'; Color = 'Crimson' }
)

$assetDir = Join-Path $PSScriptRoot 'src/assets/students'
New-Item -Path $assetDir -ItemType Directory -Force | Out-Null

foreach ($student in $students) {
    $image = New-Object System.Drawing.Bitmap(600, 450)
    $graphics = [System.Drawing.Graphics]::FromImage($image)
    $graphics.Clear([System.Drawing.Color]::FromName($student.Color))

    $overlay = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 255, 255, 255))
    $graphics.FillRectangle($overlay, 30, 30, 540, 390)

    $circleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 255, 255, 255))
    $graphics.FillEllipse($circleBrush, 160, 100, 280, 290)
    $graphics.FillRectangle($circleBrush, 210, 220, 180, 150)

    $font = New-Object System.Drawing.Font('Arial', 30, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Point)
    $size = $graphics.MeasureString($student.Label, $font)
    $x = (600 - $size.Width) / 2
    $y = 345
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
    $graphics.DrawString($student.Label, $font, $textBrush, $x, $y)
    $graphics.Dispose()

    $filePath = Join-Path $assetDir "$($student.Name).jpg"
    $image.Save($filePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $image.Dispose()

    Write-Host "Created $filePath"
}

Write-Host 'All student photo files were generated successfully.'
