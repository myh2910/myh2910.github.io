settings.tex = "pdflatex";
settings.outformat = "png";

import olympiad;
defaultpen(fontsize(10pt)+linewidth(0.6));
size(6cm);

pair O = origin;
pair A = dir(126.65);
pair B = dir(-155.75);
pair C = dir(-24.25);
pair I = incenter(A, B, C);
pair M = midpoint(B--C);
pair N = midpoint(A--C);
pair MA = midpoint(arc(O, C, B));
pair MB = midpoint(arc(O, A, C));
pair OA = midpoint(MB--N);
pair W = midpoint(arc(OA, MB, N));

real a = 1.2;
filldraw(box((-a, -a), (a, a)), white, white);
filldraw(unitcircle, opacity(0.3)+lightcyan, deepblue);
filldraw(A--B--C--cycle, opacity(0.2)+red, red);
filldraw(circle(OA, abs(N-OA)), opacity(0.3)+lightgreen, cyan+blue);

markscalefactor = 0.01;
draw(rightanglemark(N, I, A), brown);
draw(MA--MB, dotted);
draw(A--I--N, orange);

dot("$A$", A, A);
dot("$B$", B, B);
dot("$C$", C, C);
dot("$I$", I, dir(-60));
dot("$M$", M, S);
dot("$N$", N, dir(60));
dot("$M_A$", MA, MA);
dot("$M_B$", MB, MB);
label("$\omega_A$", W, 2*W);
