$pdf_mode = 1;
$pdflatex = 'pdflatex -synctex=1 %O %S; convert -density 340 -trim %D +profile "*" %R.png';

# vim: ft=perl
