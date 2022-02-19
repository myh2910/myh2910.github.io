window.MathJax = {
	tex: {
		inlineMath: [['\\(', '\\)']],
		displayMath: [['\\[', '\\]']],
		macros: {
			// From Evan Chen's evan.sty
			CC: '{\\mathbb C}',
			EE: '{\\mathbb E}',
			FF: '{\\mathbb F}',
			II: '{\\mathbb I}',
			NN: '{\\mathbb N}',
			QQ: '{\\mathbb Q}',
			RR: '{\\mathbb R}',
			ZZ: '{\\mathbb Z}',
			A: '{\\mathcal A}',
			B: '{\\mathcal B}',
			C: '{\\mathcal C}',
			O: '{\\mathcal O}',
			P: '{\\mathcal P}',
			Q: '{\\mathcal Q}',
			R: '{\\mathcal R}',
			S: '{\\mathcal S}',
			T: '{\\mathcal T}',
			X: '{\\mathcal X}',
			Y: '{\\mathcal Y}',
			Z: '{\\mathcal Z}',
			floor: ['\\left\\lfloor#1\\right\\rfloor', 1],
			ceil: ['\\left\\lceil#1\\right\\rceil', 1],
			cycsum: '\\sum_{\\mathrm{cyc}}',
			symsum: '\\sum_{\\mathrm{sym}}',
			cycprod: '\\prod_{\\mathrm{cyc}}',
			symprod: '\\prod_{\\mathrm{sym}}',
			pths: ['\\left(#1\\right)', 1],
			abs: ['\\left\\lvert#1\\right\\rvert', 1],
			norm: ['\\left\\lVert#1\\right\\rVert', 1],
			dang: '\\measuredangle',
			ray: ['\\overrightarrow{#1}', 1],
			seg: ['\\overline{#1}', 1],
			arc: ['\\stackrel{\\huge\\frown}{#1}', 1],
			dg: ['^\\circ'],
			empty: '\\varnothing'
		}
	}
};
