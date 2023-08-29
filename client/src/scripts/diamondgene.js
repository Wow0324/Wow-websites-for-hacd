

// 
export function DiamondLifeGeneConvertVisualGene(lifegenehex, diamondname) {

    // WTYUIAHXVMEKBSZN
    var diaswitchs = {
        'W': '0',
        'T': "1",
        'Y': "2",
        'U': "3",
        'I': "4",
        'A': "5",
        'H': "6",
        'X': "7",
        'V': "8",
        'M': "9",
        'E': "a",
        'K': "b",
        'B': "c",
        'S': "d",
        'Z': "e",
        'N': "f",
    }

    var hexswitchs = {
        0: "0" ,
        1: "1" ,
        2: "2" ,
        3: "3" ,
        4: "4" ,
        5: "5" ,
        6: "6" ,
        7: "7" ,
        8: "8" ,
        9: "9" ,
        10: "a",
        11: "b",
        12: "c",
        13: "d",
        14: "e",
        15: "f",
    }

    // diamond gene convert
    let visualgene = new Array(20);

    // Top 6
    var k = 2
    for(let i = 0; i < 6; i++) {
        var s = diamondname[i]
        var e = diaswitchs[s] || "0"
        visualgene[k] = e
        k++
    }

    // Last 11 digits
    for(let i = 40; i < 62; i+=2) {
        var hexone = lifegenehex[i] + lifegenehex[i+1]
        let x = parseInt(hexone, 16)
        x = x % 16
        let e = hexswitchs[x] || "0"
        visualgene[k] = e
        k++
    }
    // Make up the last digit
    visualgene[19] = "0"

    // Last bit of hash as shape selection
    visualgene[0] = lifegenehex[62]
    visualgene[1] = lifegenehex[63]
	
    // visual gene
    return visualgene.join('')
}