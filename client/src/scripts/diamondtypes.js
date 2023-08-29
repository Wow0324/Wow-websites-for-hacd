var DiamondLetters = ["W", "T", "Y", "U", "I", "A", "H", "X", "V", "M", "E", "K", "B", "S", "Z", "N"]
export const DiamondTypes = [
    [1, 'Special Shape'], 
    [11, 'Square'], 
    [12, 'Ellipse'], 
    [13, 'Heart'], 
    [14, 'Triangle'], 
    [15, 'Teardrop'], 
    [16, 'Circle'], 
    [17, 'Rhombus'], 
    [18, 'Hexagon'], 
    [21, 'W Dark blue'], 
    [22, 'T Blue'], 
    [23, 'Y Red purple'], 
    [24, 'U Blue purple'], 
    [25, 'I Red'], 
    [26, 'A Red cyan'], 
    [27, 'H Pink'], 
    [28, 'X Grey'], 
    [29, 'V Light pink '], 
    [30, 'M Yellow secret'], 
    [31, 'E Secret'], 
    [32, 'K Pink cyan'], 
    [33, 'B Cyan'], 
    [34, 'S Green'], 
    [35, 'Z Gold'], 
    [36, 'N Yellow Cyan'], 
    [101, 'Pure'], 
    [102, 'Left three pure'], 
    [103, 'Left mix pure'], 
    [104, 'Right three pure'], 
    [105, 'Right mix pure'], 
    [106, 'Symmetry'], 
    [107, 'Half divide'], 
    [108, 'Double mix'], 
    [109, 'Center color'], 
    [110, 'Edge color'], 
    [111, 'Sum four color'], 
    [112, 'Sum five color'], 
    [113, 'Sum six color'], 
    [114, 'All 14 color'], 
    [115, 'All 15 color'], 
    [116, 'All 16 color'], 
    [201, 'Big slam'], 
    [202, 'Penta repeat'], 
    [203, 'Quadro repeat'], 
    [204, 'Triple repeat'], 
    [205, 'Two letters'], 
    [206, 'Three letters'], 
    [207, 'Half repeat'], 
    [208, 'Symmetric letters'], 
    [241, 'Single num'], 
    [242, 'Repetition'], 
    [243, 'Tail four'], 
    [244, 'Tail five'], 
    [245, 'Tail six'], 
    [246, 'Serial num'], 
    [247, 'Serial repeat'], 
    [248, 'Symmetric num']
];
export const DiamondTypeMaps = {
    '1': 'Special Shape',
    '11': 'Square',
    '12': 'Ellipse',
    '13': 'Heart',
    '14': 'Triangle',
    '15': 'Teardrop',
    '16': 'Circle',
    '17': 'Rhombus',
    '18': 'Hexagon',
    '21': 'W Dark blue',
    '22': 'T Blue',
    '23': 'Y Red purple',
    '24': 'U Blue purple',
    '25': 'I Red',
    '26': 'A Red cyan',
    '27': 'H Pink',
    '28': 'X Grey',
    '29': 'V Light pink ',
    '30': 'M Yellow secret',
    '31': 'E Secret',
    '32': 'K Pink cyan',
    '33': 'B Cyan',
    '34': 'S Green',
    '35': 'Z Gold',
    '36': 'N Yellow Cyan',
    '101': 'Pure',
    '102': 'Left three pure',
    '103': 'Left mix pure',
    '104': 'Right three pure',
    '105': 'Right mix pure',
    '106': 'Symmetry',
    '107': 'Half divide',
    '108': 'Double mix',
    '109': 'Center color',
    '110': 'Edge color',
    '111': 'Sum four color',
    '112': 'Sum five color',
    '113': 'Sum six color',
    '114': 'All 14 color',
    '115': 'All 15 color',
    '116': 'All 16 color',
    '201': 'Big slam',
    '202': 'Penta repeat',
    '203': 'Quadro repeat',
    '204': 'Triple repeat',
    '205': 'Two letters',
    '206': 'Three letters',
    '207': 'Half repeat',
    '208': 'Symmetric letters',
    '241': 'Single num',
    '242': 'Repetition',
    '243': 'Tail four',
    '244': 'Tail five',
    '245': 'Tail six',
    '246': 'Serial num',
    '247': 'Serial repeat',
    '248': 'Symmetric num'
};
var DiamondImageColorListDefs = [
    ['041B2D', '004E9A'], //Dark blue
    ['004E9A', '428CD4'], //Blue
    ['8A5082', '6F5F90'], //Red purple
    ['6F5F90', '758EB7'], //Blue purple
    ['8A5082', 'FF7B89'], //Red
    ['FF7B89', 'A5CAD2'], //Red cyan
    ['F7D6E0', 'F2B5D4'], //Pink
    ['E5C1CD', 'C9BBC8'], //Grey
    ['EFF7F6', 'F7D6E0'], //Light pink
    ['F3DBCF', 'AAC9CE'], //Yellow secret
    ['AAC9CE', 'B6B4C2'], //Secret
    ['F2B5D4', '7BDFF2'], //Pink cyan
    ['7BDFF2', 'B2F7EF'], //Cyan
    ['85CBCC', 'A7D676'], //Green
    ['daad7b', 'F9E2AE'], //Gold
    ['F9E2AE', 'A8DEE0'], //Yellow Cyan
];
var DiamondImageColorNameListDefs = [
    "Dark Blue",
    "Blue",
    "Red Purple",
    "Blue Purple",
    "Red",
    "Red Cyan",
    "Pink",
    "Grey",
    "Light Pink",
    "Yellow Secret",
    "Secret",
    "Pink Cyan",
    "Cyan",
    "Green",
    "Gold",
    "Yellow Cyan"
]
var DiamondAreaRatio = [
    //Regular Diamond
    [3.83, 1.26, 2.81, 2.81, 1.26, 1.85, 1.85, 3.38, 3.38, 5.05, 5.05, 5.55, 16.08, 16.08, 14.88, 14.88],
    //Square
    [34.03, 1.59, 1.61, 1.64, 1.59, 6.23, 5.91, 7.39, 6.93, 6.76, 6.76, 6.12, 5.74, 1.95, 1.86, 1.86, 1.95],
    //Ellipse
    [23.27, 3.69, 3.69, 3.13, 3.13, 1.50, 1.50, 1.50, 1.50, 10.21, 10.21, 10.21, 10.21, 2.19, 2.19, 2.19, 2.19, 3.69, 3.69],
    //Heart
    [43.37, 3.55, 3.55, 4.13, 4.13, 4.25, 4.25, 3.48, 3.47, 3.06, 3.07, 3.73, 3.72, 3.39, 3.39, 2.73, 2.73],
    //Triangle
    [9.29, 9.12, 9.44, 9.44, 4.46, 4.46, 3.83, 3.76, 3.76, 3.82, 6.27, 5.74, 5.75, 6.27, 7.25, 7.25],
    //TearDrop
    [26.96, 5.80, 5.80, 3.13, 5.17, 3.13, 5.17, 4.01, 5.87, 4.78, 4.11, 3.62, 4.00, 5.87, 4.78, 4.11, 3.61],
    //Circle
    [43.64, 4.46, 4.42, 4.46, 4.38, 3.34, 3.52, 3.34, 3.51, 3.11, 3.07, 3.15, 3.12, 3.16, 3.09, 3.04, 3.11],
    //Rhombus
    [12.41, 8.25, 8.15, 8.66, 8.75, 5.58, 5.46, 5.46, 5.58, 4.08, 4.02, 4.02, 4.08 ,4.08, 3.64, 3.64, 4.08],
    //Hexagon
    [7.71, 7.80, 4.81, 7.80, 4.82, 5.33, 5.33, 6.02, 5.33, 5.33, 6.02, 5.33, 5.74, 5.74, 5.33, 5.74, 5.74]

];
var DiamondImageTagSvgPointStuffDatas = [

    /************************ 0 **************************/
    {
        points: [
            /*0 */ '',
            /*1 */ '375,488',
            /*2 */ '375,288',
            /*3 */ '275,288',
            /*4 */ '475,288',
            /*5 */ '175,273',
            /*6 */ '575,273',
            /*7 */ '240,220',
            /*8 */ '510,220',
            /*9 */ '307,213',
            /*10*/ '443,213',
            /*11*/ '307,230',
            /*12*/ '375,230',
            /*13*/ '443,230',
            /*14*/ '334,253',
            /*15*/ '416,253',
        ],
        polygonAndLinearGradient: [
            [ [14,15], [2,14,12,15] ],
            [ [11,12], [11,12,14] ],
            [ [2,4], [2,4,15] ],
            [ [3,2], [2,3,14] ],
            [ [12,13], [12,13,15] ],
            [ [3,11], [3,11,14] ],
            [ [4,13], [4,13,15] ],
            [ [11,7], [7,3,11] ],
            [ [13,8], [8,4,13] ],
            [ [3,5], [5,3,7] ],
            [ [4,6], [4,6,8] ],
            [ [7,8], [7,11,13,8,10,9] ],
            [ [3,2], [3,2,1] ],
            [ [2,4], [2,4,1] ],
            [ [5,1], [5,1,3] ],
            [ [6,1], [1,6,4] ],
        ],
        structureLines: [
            ['polyline', 1,5,7,9,10,8,6,1],
            ['polyline', 1,3,7,11,13,8,4,1],
            ['polyline', 5,3,11,2,13,4,6],
            ['polyline', 1,2,3,12,4,2],
        ],
    },

    /************************ 1 **************************/
    {

        points: [
            /*0 */ '',
            /*1 */ '319,452',
            /*2 */ '303,437',
            /*3 */ '303,266',
            /*4 */ '319,250',
            /*5 */ '432,250',
            /*6 */ '449,266',
            /*7 */ '449,437',
            /*8 */ '432,452',
            /*9 */ '300,492',
            /*10*/ '271,462',
            /*11*/ '271,242',
            /*12*/ '300,212',
            /*13*/ '450,212',
            /*14*/ '479,242',
            /*15*/ '479,462',
            /*16*/ '450,492',
            /*17*/ '288,522',
            /*18*/ '247,480',
            /*19*/ '247,222',
            /*20*/ '288,180',
            /*21*/ '462,180',
            /*22*/ '503,222',
            /*23*/ '503,480',
            /*24*/ '462,522',
            /** */
            /*25*/ '270,350',
            /*26*/ '303,350',
            /*27*/ '270,350',
            /*28*/ '247,350',
            /*29*/ '479,350',
            /*30*/ '449,350',
            /*31*/ '503,350',
            /*32*/ '479,350',
        ],
        polygonAndLinearGradient: [
            [ [3,6], [1,2,3,4,5,6,7,8,1] ],
            [ [11,12], [3,4,12,11] ],
            [ [16,15], [7,8,16,15] ],
            [ [10,9], [1,2,10,9] ],
            [ [13,14], [5,6,14,13] ],
            [ [16,9], [1,8,16,9] ],
            [ [13,12], [4,5,13,12] ],
            [ [25,26], [2,3,11,10] ],
            [ [29,30], [6,7,15,14] ],
            [ [27,28], [10,11,19,18] ],
            [ [31,32], [14,15,23,22] ],
            [ [20,21], [12,13,21,20] ],
            [ [17,24], [9,16,24,17] ],
            [ [19,12], [11,12,20,19] ],
            [ [16,23], [15,16,24,23] ],
            [ [18,9], [9,10,18,17] ],
            [ [13,22], [13,14,22,21] ],
        ],
        structureLines: [
            ['polyline', 1,2,3,4,5,6,7,8,1],
            ['polyline', 9,10,11,12,13,14,15,16,9],
            ['polyline', 17,18,19,20,21,22,23,24,17],
            ['polyline', 17,9,1,2,10,18],
            ['polyline', 19,11,3,4,12,20],
            ['polyline', 21,13,5,6,14,22],
            ['polyline', 23,15,7,8,16,24],
        ],
    },

    /************************ 10 **************************/
    {
        points: [
            /*0 */ '',
            /*1 */ '375,515',
            /*2 */ '328,491',
            /*3 */ '285,350',
            /*4 */ '328,209',
            /*5 */ '375,185',
            /*6 */ '422,209',
            /*7 */ '465,350',
            /*8 */ '422,491',
            /*9 */ '375,450',
            /*10*/ '353,470',
            /*11*/ '397,470',
            /*12*/ '345.5,417',
            /*13*/ '336,350',
            /*14*/ '345.5,283',
            /*15*/ '375,250',
            /*16*/ '353,230',
            /*17*/ '397,230',
            /*18*/ '404.5,283',
            /*19*/ '414,350',
            /*20*/ '404.5,417',
        ],
        polygonAndLinearGradient: [
            [ [13,19], [13,14,15,18,19,20,9,12] ],
            [ [3,13], [3,14,13,12] ],
            [ [7,19], [7,18,19,20] ],
            [ [16,17], [15,16,5,17] ],
            [ [10,11], [9,10,1,11] ],
            [ [14,16], [14,16,15] ],
            [ [18,17], [15,17,18] ],
            [ [12,10], [9,10,12] ],
            [ [20,11], [20,11,9] ],
            [ [6,7], 'M404.5,283 L397,230 L422,209 Q464,260 465,350 z' ],
            [ [7,8], 'M404.5,417 L397,470 L422,491 Q464,440 465,350 z' ],
            [ [4,3], 'M345.5,283 L353,230 L328,209 Q286,260 285,350 z' ],
            [ [3,2], 'M345.5,417 L353,470 L328,491 Q286,440 285,350 z' ],

            [ [5,6], 'M397,230 L375,185 Q400,185 422,209 z' ],
            [ [1,8], 'M397,470 L375,515 Q400,515 422,491 z' ],
            [ [5,4], 'M353,230 L375,185 Q350,185 328,209 z' ],
            [ [1,2], 'M353,470 L375,515 Q350,515 328,491 z' ],
            /* [ [], [] ], */
        ],
        structureLines: [
             `<ellipse class="st16" cx="375" cy="350" rx="90" ry="165"/>`,
            ['polyline', 1,10,13,16,5,17,19,11,1],
            ['polyline', 3,15,7,9,3],
            ['polyline', 2,10,9,11,8],
            ['polyline', 4,16,15,17,6],
            ['polyline', 3,13],
            ['polyline', 7,19],

            /* ['polyline', ], */
        ],

    },

    /************************ 6 **************************/
    {
        points: [
            /*0 */ '',
            /*1 */ '375,524',
            /*2 */ '375,456',
            /*3 */ '188,328',
            /*4 */ '238,316',
            /*5 */ '188,256',
            /*6 */ '238,270',
            /*7 */ '248,184',
            /*8 */ '272,238',
            /*9 */ '330,184',
            /*10*/ '320,238',
            /*11*/ '375,228',
            /*12*/ '375,283',
            /*13*/ '420,184',
            /*14*/ '430,238',
            /*15*/ '502,184',
            /*16*/ '478,238',
            /*17*/ '562,256',
            /*18*/ '512,270',
            /*19*/ '562,328',
            /*20*/ '512,316',
            /*21*/ '504,389',
            /*22*/ '492,337',
            /*23*/ '477,417',
            /*24*/ '424,406',
            /*25*/ '415,482', 
            /*26*/ '402,428',
            /*27*/ '335,482',
            /*28*/ '348,428',
            /*29*/ '273,417',
            /*30*/ '326,406',
            /*31*/ '246,389',
            /*32*/ '258,337',    
        ],
  
        polygonAndLinearGradient: [
            [ [4,20], [2,4,6,8,10,12,14,16,18,20,2] ],
            [ [9,12], [9,10,12,11] ],
            [ [12,13], [11,12,14,13] ],
            [ [7,9], [7,8,10,9] ],
            [ [13,15], [13,14,16,15] ],
            [ [15,18], [15,16,18,17] ],
            [ [7,6], [5,6,8,7] ],
            [ [5,4], [3,4,6,5] ],
            [ [17,20], [17,18,20,19] ],
            [ [3,32], [3,4,32,31] ],
            [ [22,19], [19,20,22,21] ],
            [ [31,30], [29,30,32,31] ],
            [ [24,21], [21,22,24,23] ],
            [ [29,28], [27,28,30,29] ],
            [ [26,23], [23,24,26,25] ],
            [ [28,1], [1,2,28,27] ],
            [ [1,26], [1,2,26,25] ],
        ],
        structureLines: [
            ['polyline', 1,3,5,7,9,11,13,15,17,19,1],
            ['polyline', 2,4,6,8,10,12,14,16,18,20,2],
            ['polyline', 1,2,4,3,5,6,8,7,9,10,12,11,13,14,16,15,17,18,20,19],
            ['polyline', 21,22],
            ['polyline', 23,24],
            ['polyline', 25,26],
            ['polyline', 27,28],
            ['polyline', 29,30],
            ['polyline', 31,32],
        ],
    },

    /************************ 8 **************************/
    {

        points: [
            /*0 */ '',
            /*1 */ '180,520',
            /*2 */ '281,344',
            /*3 */ '375,180',
            /*4 */ '469,344',
            /*5 */ '570,520',
            /*6 */ '375,520',
            /*7 */ '255,470',
            /*8 */ '375,260',
            /*9 */ '495,470',
            /*10*/ '375,470',
            /*11*/ '316,364',
            /*12*/ '434,364',
        ],
        polygonAndLinearGradient: [
            [ [11,12], [10,11,12] ],
            [ [8,12], [11,12,8] ],
            [ [9,10], [12,10,9] ],
            [ [7,11,], [10,11,7] ],
            [ [7,10], [7,10,6] ],
            [ [10,9], [10,9,6] ],
            [ [7,11], [7,11,2] ],
            [ [11,8], [11,8,2] ],
            [ [8,12,], [8,12,4] ],
            [ [12,9], [12,9,4] ],
            [ [1,2], [1,2,7] ],
            [ [2,3], [2,3,8] ],
            [ [3,4], [3,4,8] ],
            [ [4,5], [4,5,9] ],
            [ [5,6], [5,6,9] ],
            [ [6,1], [6,1,7] ],
        ],
        structureLines: [
            ['polyline', 1,3,5,1,7,2,8,4,9,6,7,8,9,7],
            ['polyline', 5,9],
            ['polyline', 3,8],
            ['polyline', 6,10,11,2],
            ['polyline', 11,12,4],
            ['polyline', 10,12],
        ],

    },

    /************************ 9 **************************/
    {

        points: [
            /*0 */ '',
            /*1 */ '375,184',
            /*2 */ '429,240',
            /*3 */ '482,357',
            /*4 */ '480,446',
            /*5 */ '443,500',
            /*6 */ '375,520',
            /*7 */ '307,500',
            /*8 */ '270,446',
            /*9 */ '268,357',
            /*10*/ '321,240',
            /*11*/ '375,260',
            /*12*/ '415,307',
            /*13*/ '430,412',
            /*14*/ '375,470',
            /*15*/ '320,412',
            /*16*/ '335,307',
        ],
        polygonAndLinearGradient: [
            [ [15,13], [11,12,13,14,15,16] ],
            [ [9,15], [9,15,16] ],
            [ [3,13], [3,13,12] ],
            [ [10,16], [10,16,11] ],
            [ [5,14], [5,14,13] ],
            [ [2,12], [2,12,11] ],
            [ [7,14], [7,14,15] ],
            [ [1,2], 'M375,260 L375,184 Q408,210 429,240 z'],
            [ [2,3], 'M415,307 L429,240 Q470,298 482,357 z'],
            [ [3,4], 'M430,412 L482,357 Q492,400 480,446 z'],
            [ [13,4],'M430,412 L480,446 Q469,481 443,500 z'],
            [ [5,6], 'M375,470 L443,500 Q416,520 375,520 z'],

            [ [10,1],'M375,260 L375,184 Q342,210 321,240 z'],
            [ [9,16],'M335,307 L321,240 Q280,298 268,357 z'],
            [ [15,8],'M320,412 L268,357 Q258,400 270,446 z'],
            [ [15,7],'M320,412 L270,446 Q281,481 307,500 z'],
            [ [14,7],'M375,470 L307,500 Q334,520 375,520 z'],
        ],
        structureLines: [
            `<path class="st16" d="M375,520c-76.9,0-111.7-54.5-111.7-124c0-69.6,46.9-163.4,111.7-211.8 c64.8,48.4,111.7,142.2,111.7,211.8S451.9,520,375,520z"/>`,
            ['polyline', 11,12,13,14,15,16,11],            
            ['polyline', 14,7,15,9,16,10,11,2,12,3,13,5,14],           
            ['polyline', 1,11],   
            ['polyline', 6,14],   
            ['polyline', 8,15],   
            ['polyline', 4,13], 
        ],

    },

    /************************ 2 **************************/
    {


        points: [
            /*0 */ '',
            /*1 */ '205,350',
            /*2 */ '255,229',
            /*3 */ '375,180',
            /*4 */ '496,231',
            /*5 */ '545,350',
            /*6 */ '495,471',
            /*7 */ '375,520',
            /*8 */ '256,470',
            /*9 */ '251,395',
            /*10*/ '251,305',
            /*11*/ '331,225',
            /*12*/ '419,225',
            /*13*/ '499,305',
            /*14*/ '499,395',
            /*15*/ '419,475',
            /*16*/ '331,475',
            /*17*/ '275,350',
            /*18*/ '305,280',
            /*19*/ '375,248',
            /*20*/ '445,280',
            /*21*/ '475,350',
            /*22*/ '445,420',
            /*23*/ '375,452',
            /*24*/ '305,420',
        ],
        polygonAndLinearGradient: [
            [ [10,14], [17,10,18,11,19,12,20,13,21,14,22,15,23,16,24,9,17] ],
            [ [10,11], [10,2,11,18] ],
            [ [12,13], [12,4,13,20] ],
            [ [14,15], [14,6,15,22] ],
            [ [16,9], [16,8,9,24] ],
            [ [11,12], [11,3,12,19] ],
            [ [21,5], [13,5,14,21] ],
            [ [15,16], [15,7,16,23] ],
            [ [1,17], [9,1,10,17] ],
            [ [1,2], 'M251,305 l-46,44.5 c0,0-2.6-68.5,50-120 L251,305z'], 
            [ [2,3], 'M331,225 l-75.2,4 c0,0,45-50,119.5-49 L331,225z'],
            [ [3,4], 'M419,225 L375,180 c0,0,68.4-4,121,50.5 L419,225z'],
            [ [4,5], 'M499,305 l-3-74.6 c0,0,50.5,46.3,49,120 L499,305z'], 
            [ [5,6], 'M499,395 l46-45 c0,0,4,67-50,121 L499,395z'],
            [ [6,7], 'M419,475 l76-4 c0,0-46.5,50.3-120,49 L419,475z'],               
            [ [7,8], 'M331,475 l44,45 c0,0-68.4,3-119-50 L331,475z'],       
            [ [8,9], 'M251,395 l4.7,75 c0,0-50.4-45-51-120 L251,395z'],     
        ],
        structureLines: [
            '<ellipse  class="st16" cx="375" cy="350" rx="170" ry="170"/>',
            ['polyline', 1,10,2,11,3,12,4,13,5,14,6,15,7,16,8,9,1],
            ['polyline', 17,10,18,11,19,12,20,13,21,14,22,15,23,16,24,9,17],
        ],


    },

    /************************ 13 **************************/
    {

        points: [
            /*0 */ '',
            /*1 */ '375,515',
            /*2 */ '280,350',
            /*3 */ '375,185',
            /*4 */ '470,350',
            /*5 */ '327.5,432.5',
            /*6 */ '327.5,267.5',
            /*7 */ '422.5,267.5',
            /*8 */ '422.5,432.5',
            /*9 */ '375,461.5',
            /*10*/ '307,350',
            /*11*/ '375,238.5',
            /*12*/ '440,350',
            /*13*/ '375,408',
            /*14*/ '340,350',
            /*15*/ '375,294',
            /*16*/ '410,350',
        ],
        polygonAndLinearGradient: [
            [ [14,16], [13,14,15,16] ],
            [ [11,12], [11,12,16,15] ],
            [ [12,9,], [12,9,13,16] ],
            [ [9,10], [9,10,14,13] ],
            [ [10,11], [10,11,15,14] ],
            [ [12,11], [12,11,7] ],
            [ [11,10], [11,10,6] ],
            [ [10,9], [10,9,5] ],
            [ [9,12], [9,12,8] ],
            [ [3,7], [3,7,11] ],
            [ [7,4], [7,4,12] ],
            [ [4,8], [4,8,12] ],
            [ [8,1], [8,1,9] ],
            [ [1,5], [1,5,9] ],
            [ [5,2], [5,2,10] ],
            [ [2,6], [2,6,10] ],
            [ [6,3], [6,3,11] ],
        ],
        structureLines: [
            ['polyline', 1,2,3,4,1],
            ['polyline', 13,14,15,16,13],
            ['polyline', 9,12,11,10,9],
            ['polyline', 1,9,5,10,6,11,7,12,8,9,13],
            ['polyline', 2,14],
            ['polyline', 3,15],
            ['polyline', 4,16],
        ],
    },

    /************************ 14 **************************/
    {



        points: [
            /*0 */ '',
            /*1 */ '284,513',
            /*2 */ '187,350',
            /*3 */ '284,187',
            /*4 */ '466,187',
            /*5 */ '563,350',
            /*6 */ '466,513',
            /*7 */ '375,459.75',
            /*8 */ '284,406.5',
            /*9 */ '284,293.5',
            /*10*/ '375,240.25',
            /*11*/ '466,293.5',
            /*12*/ '466,406.5',
            /*13*/ '420,390',
            /*14*/ '330,390',
            /*15*/ '330,310',
            /*16*/ '420,310',
            /** */
            /*17*/ '284,390',
            /*18*/ '466,390',


        ],
        polygonAndLinearGradient: [
            [ [14,13], [13,14,15,16] ],
            [ [10,15], [9,10,11,16,15] ],
            [ [13,18], [11,12,13,16] ],
            [ [7,14], [12,13,14,8,7] ],
            [ [17,14], [8,9,15,14] ],
            [ [10,9], [10,9,3] ],
            [ [10,11], [10,11,4] ],
            [ [11,12], [11,12,5] ],
            [ [12,7], [12,7,6] ],
            [ [7,8], [7,8,1] ],
            [ [8,9], [8,9,2] ],
            [ [3,4], [3,4,10] ],
            [ [4,5], [4,5,11] ],
            [ [5,6], [5,6,12] ],
            [ [6,1], [6,1,7] ],
            [ [1,2], [1,2,8] ],
            [ [2,3], [2,3,9] ],
        ],
        structureLines: [
            ['polyline', 1,3,5,1,2,4,6,2,3,4,5,6,1],
            ['polyline', 8,14,15,9],
            ['polyline', 12,13,16,11],
            ['polyline', 13,14],
            ['polyline', 15,16],
        ],


    },



];

export function decideDiamondTypes(imgstuffhex, name, number) {
    var results = [];
    var point = 0;

    var hex2nums = function(hex) {
        var size = imgstuffhex.length;
        var nums = new Array(size);
        for(var i=0; i<size; i++){
            var n = 0
            switch(hex[i]){
                case '0': n = 0; break;
                case '1': n = 1; break;
                case '2': n = 2; break;
                case '3': n = 3; break;
                case '4': n = 4; break;
                case '5': n = 5; break;
                case '6': n = 6; break;
                case '7': n = 7; break;
                case '8': n = 8; break;
                case '9': n = 9; break;
                case 'A': n = 10; break;
                case 'a': n = 10; break;
                case 'B': n = 11; break;
                case 'b': n = 11; break;
                case 'C': n = 12; break;
                case 'c': n = 12; break;
                case 'D': n = 13; break;
                case 'd': n = 13; break;
                case 'E': n = 14; break;
                case 'e': n = 14; break;
                case 'F': n = 15; break;
                case 'f': n = 15; break;
                default:break;
            }
            nums[i] = n;
        }
        return nums
    }

    if(imgstuffhex.length < 2 + 6 + 11){
        return {types : [], shape: '', stars: 0, colorRatio: 0, colorName : "", point : 0, sumOfColors: '', specialLetters: ''}
    }

    /* 开始解析 */

    var stuffnums = hex2nums(imgstuffhex)
    var itemNo = stuffnums[0] * 16 + stuffnums[1]
    var shape = "Regular"
    var sumOfColors = '';
    var specialLetters = ''

    if(itemNo > 8 || itemNo === 0) {
        /*-----------Styles diamonds-----------*/
        itemNo = 0
        var stuffobj = DiamondImageTagSvgPointStuffDatas[itemNo]

        /*-----------Set Styles Types of diamonds-----------*/
        var cls12 = DiamondImageColorListDefs[stuffnums[2+parseInt(12)]]
        var cls13 = DiamondImageColorListDefs[stuffnums[2+parseInt(13)]]
        var cls14 = DiamondImageColorListDefs[stuffnums[2+parseInt(14)]]
        var cls15 = DiamondImageColorListDefs[stuffnums[2+parseInt(15)]]
        //
        if(cls12[1] === cls13[1] && cls13[1] === cls14[1] && cls14[1] === cls15[1]){
            //Pure diamonds
            shape = "Pure diamonds"
            results.push("101")
            point += 10
        }
        else if(cls12[1] === cls13[1]){
            //Left three pure
            if(cls12[1] === cls14[1] && cls14[1] !== cls15[1]){
                shape = "Left three pure"
                results.push("102")
                point += 8
            }
            //Right three pure
            else if(cls12[1] === cls15[1] && cls14[1] !== cls15[1]){
                shape = "Right three pure"
                results.push("104")
                point += 8
            }
            //Symmetry
            else if(cls14[1] === cls15[1] && cls12[1] !== cls14[1]){
                shape = "Symmetry"
                results.push("106")
                point += 9
            }
            else{
                //Center color
                shape = "Center color"
                results.push("109")
                point += 8
            }
        }
        else if(cls12[1] === cls14[1]){
            if(cls12[1] === cls15[1] && cls12[1] !== cls13[1]){
                //Left mix pure
                results.push("103")
                shape = "Left mix pure"
                point += 7
            }
            else if(cls13[1] === cls15[1]){
                //Half divide
                results.push("107")
                shape = "Half divide"
                point += 8
            }
        }
        else if(cls13[1] === cls15[1]){
            if(cls15[1] === cls14[1] && cls12[1] !== cls14[1]){
                //Right mix pure
                results.push("105")
                shape = "Right mix pure"
                point += 7
            }
        }
        else if(cls12[1] === cls15[1] && cls13[1] === cls14[1] && cls12[1] !== cls13[1]){
            //Double mix
            results.push("108")
            shape = "Double mix"
            point += 8
        }
        else if(cls14[1] === cls15[1] && cls12[1] !== cls13[1] && cls12[1] !== cls14[1]){
            //Edge color
            results.push("110")
            shape = "Edge color"
            point += 7
        }
        else{
            point += 6
        }

    }
    else{
        /*-----------Special Shape diamonds-----------*/
        results.push("1")

        //set diamond shape
        let shapeType = itemNo + 10;

        //add point
        switch(itemNo){
            //Circle, Square, Hexagon
            case 1:
                shape = "Square"
                point += 9
                break
            case 6:
                shape = "Circle"
                point += 9
                break
            case 8:
                shape = "Hexagon"
                point += 9
                break
            //Heart
            case 3:
                shape = "Heart"
                point += 10
                break
            //Ellipse, Teardrop, Triangle, Rhombus
            case 2:
                shape = "Ellipse"
                point += 8
                break
            case 4:
                shape = "Triangle"
                point += 8
                break
            case 5:
                shape = "Teardrop"
                point += 8
                break
            case 7:
                shape = "Rhombus"
                point += 8
                break
            default:
                break
        }

        results.push(shapeType.toString())

        /*-----------Set Colors Types of diamonds-----------*/
        var firstLetter = name.charAt(0)
        var cls = DiamondImageColorListDefs[stuffnums[2+parseInt(0)]]
        for (let i = 0; i < 16; i++) {
            var colorTypes = 21;
            if(cls[1] === DiamondImageColorListDefs[i][1] && firstLetter === DiamondLetters[i]){
                colorTypes += i
                results.push(colorTypes.toString())

                //add point
                switch(i){
                    //Z Gold
                    case 14:
                        point += 10
                        shape += ", Z Gold"
                        break
                    case 11: //K
                        shape += ", K Pink cyan"
                        point += 9
                        break
                    case 5:  //A
                        shape += ", A Red cyan"
                        point += 9
                        break
                    case 12: //B
                        shape += ", B Cyan"
                        point += 9
                        break
                    case 6:  //H
                        shape += ", H Pink"
                        point += 9
                        break
                    case 8:  //V
                        shape += ", V Light pink"
                        point += 9
                        break
                    case 2:  //Y
                        shape += ", Y Red purple"
                        point += 9
                        break
                    case 4:  //I
                        shape += ", I Red"
                        point += 9
                        break
                    case 13: //S
                        shape += ", S Green"
                        point += 8
                        break
                    case 1: //T
                        shape += ", T Blue"
                        point += 8
                        break
                    case 15: //N
                        shape += ", N Yellow cyan"
                        point += 8
                        break
                    case 7: //X
                        shape += ", X Grey"
                        point += 8
                        break
                    case 3:  //U
                        shape += ", U Blue purple"
                        break
                    case 0:  //W
                        shape += ", W Dark blue"
                        point += 8
                        break
                    case 9: //M
                        shape += ", M Yellow secret"
                        point += 7
                        break
                    case 10:  //E
                        shape += ", E Secret"
                        point += 6
                        break
                    default:
                        break
                }
                break
            }    
        }
    }

    /*-----------Calculate Star Counts-----------*/
    var stars = 0;

    var stuffobj = DiamondImageTagSvgPointStuffDatas[itemNo]
    /*-----------Calculate Color Counts-----------*/
    var colorArrays = []
    for(let i = 0 ; i < stuffobj.polygonAndLinearGradient.length ; i++){
        var cls00 = DiamondImageColorListDefs[stuffnums[2+parseInt(i)]]
        colorArrays.push(cls00[1])
    }
    
    var uniqueColors = new Set(colorArrays);
    var uniqueColorArray = Array.from(uniqueColors);
    var allColors = uniqueColors.size;
    
    switch(allColors){
        case 4:
            //Sum four color
            results.push("111")
            sumOfColors = 'Sum four color'
            stars = 1
            break
        case 5:
            //Sum five color
            results.push("112")
            sumOfColors = 'Sum five color'
            stars = 1
            break
        case 6:
            //Sum six color
            results.push("113")
            sumOfColors = 'Sum six color'
            stars = 1
            break
        case 14:
            //All 14 color
            results.push("114")
            sumOfColors = 'All 14 color'
            stars = 1
            break
        case 15:
            //All 15 color
            results.push("115")
            sumOfColors = 'All 15 color'
            stars = 1
            break
        case 16:
            //All 16 color
            results.push("116")
            stars = 1
            break
        default:
            break
    }

    //add point
    switch(allColors){
        case 4:
            point += 10
            break
        case 5:
            point += 10
            break
        case 6:
            point += 9
            break
        case 7:
            point += 8
            break
        case 8:
            point += 7
            break
        case 13:
            point += 8
            break
        case 14:
            point += 8
            break
        case 15:
            point += 8
            break
        default:
            point += 6
            break
    }
    
    /*-----------Calculate Color Ratio-----------*/
    var maxRatio = 0;
    var maxColor = "";
    var sameColorCount = 0;
    var sameColorValue = "";
    for(let i = 0 ; i < uniqueColorArray.length ; i++){
        var tempRatio = 0;
        var tempRepeatColor = 0;
        for(let j = 0 ; j < colorArrays.length ; j++){
            if(uniqueColorArray[i] == colorArrays[j]){
                tempRatio += DiamondAreaRatio[itemNo][j]
                tempRepeatColor++
            }
        }
        //set max ratio
        if(maxRatio < tempRatio){
            maxRatio = tempRatio;
            maxColor = uniqueColorArray[i];
        }

        //set repeat color
        if(sameColorCount < tempRepeatColor){
            sameColorCount = tempRepeatColor
            sameColorValue = uniqueColorArray[i]
        }
    }
    var ratioColorName = "";
    //get color name
    for(let i = 0 ; i < DiamondImageColorListDefs.length ; i++){
        if(DiamondImageColorListDefs[i][1] == maxColor){
            ratioColorName = DiamondImageColorNameListDefs[i];
            break;
        }
    }

    //get color name for same color
    var sameColorName = "";
    
    for(let i = 0 ; i < DiamondImageColorListDefs.length ; i++){
        if(DiamondImageColorListDefs[i][1] == sameColorValue){
            sameColorName = DiamondImageColorNameListDefs[i];
            break;
        }
    }

    //add point
    if(maxRatio > 55){
        point += 10
        stars += 5
    }
    else if(maxRatio > 50){
        point += 9
        stars += 4
    }
    else if(maxRatio > 40){
        point += 8
        stars += 3
    }
    else if(maxRatio > 30){
        point += 7
        stars += 2
    }
    else{
        point += 6
        stars += 2
    }

    /*-----------Literals Types diamonds-----------*/
    var arrDiamondLetters = name.split("");
    /*-Reapeat diamonds-*/

    point += 6
    //Big slam
    if(arrDiamondLetters[0] === arrDiamondLetters[1] && arrDiamondLetters[0] === arrDiamondLetters[2] && arrDiamondLetters[0] === arrDiamondLetters[3]
        && arrDiamondLetters[0] === arrDiamondLetters[4] && arrDiamondLetters[0] === arrDiamondLetters[5]){
        results.push("201")
        point -= 6
        point += 10
        stars += 1
        specialLetters = 'Big slam'
    }
    //Penta repeat
    for(let i = 0; i < 2 ; i++){
        if(arrDiamondLetters[i] === arrDiamondLetters[i+1] && arrDiamondLetters[i+1] === arrDiamondLetters[i+2] && arrDiamondLetters[i+2] === arrDiamondLetters[i+3]
            && arrDiamondLetters[i+3] === arrDiamondLetters[i+4]){
                results.push("202")
                point -= 6
                point += 10
                stars += 1
                specialLetters = 'Penta repeat'
                break
        }
    }

    //Quadro repeat
    for(let i = 0; i < 3 ; i++){
        if(arrDiamondLetters[i] === arrDiamondLetters[i+1] && arrDiamondLetters[i+1] === arrDiamondLetters[i+2] && arrDiamondLetters[i+2] === arrDiamondLetters[i+3]){
            if (!results.includes("202")) {
                results.push("203")
                point -= 6
                point += 9
                stars += 1
                specialLetters = 'Quadro repeat'
                break
            }
        }
    }

    //Triple repeat
    for(let i = 0; i < 4 ; i++){
        if(arrDiamondLetters[i] === arrDiamondLetters[i+1] && arrDiamondLetters[i+1] === arrDiamondLetters[i+2]){
            if (!results.includes("203")) {    
                results.push("204")
                point -= 6
                point += 8
                stars += 1
                specialLetters = 'Triple repeat'
                break
            }
        }
    }
    
    /*-Letter diamonds-*/
    var uniqueLetters = function(str) {
        const uniqueLetters = [...new Set(str)].filter((char) => /[a-zA-Z]/.test(char)).join('');
        return uniqueLetters.length;
      }
    var allLetterCount = uniqueLetters(name);
    
    
    switch(allLetterCount){
        case 2:
            //Two letters
            results.push("205")
            if(specialLetters != '') specialLetters += ", "
            specialLetters += "Two letters"
            point += 9
            stars += 1
            break
        case 3:
            //Three letters
            results.push("206")
            if(specialLetters != '') specialLetters += ", "
            specialLetters += "Three letters"
            point += 8
            stars += 1
            break
        default:
            point += 6
            break
    }

    
    //Half repeat
    if(arrDiamondLetters[0] === arrDiamondLetters[3] && arrDiamondLetters[1] === arrDiamondLetters[4] && arrDiamondLetters[2] === arrDiamondLetters[5]){
        results.push("207")
        if(specialLetters != '') specialLetters += ", "
        specialLetters += "Half repeat"
        point += 9
        stars += 1
    }
    //Symmetric letters
    if(arrDiamondLetters[0] === arrDiamondLetters[5] && arrDiamondLetters[1] === arrDiamondLetters[4] && arrDiamondLetters[2] === arrDiamondLetters[3]){
        results.push("208")
        if(specialLetters != '') specialLetters += ", "
        specialLetters += "Symmetric letters"
        point += 9
        stars += 1
    }

    
    /*-Number diamonds-*/
    var numberString = number.toString()
    var numberLength = numberString.length
    if(numberLength === 1){
        //Single num
        results.push("241")
        point += 10
    }
    else{
        const isAllSame = numberString.split("").every((char) => char === numberString[0]);
        if(isAllSame){
            //Repetition
            results.push("242")
            point += 10
            stars += 1
            if(specialLetters != '') specialLetters += ", "
            specialLetters += 'Repetition'
        }
        else if(numberLength > 3){
            const isTailTypes = numberString.split("").every((char, index) => index < 2 || char === numberString[1]);
            if(isTailTypes){
                if(numberLength === 5){
                    //Tail four
                    results.push("243")
                    point += 8
                    stars += 1
                    if(specialLetters != '') specialLetters += ", "
                    specialLetters += 'Tail four'
                }
                else if(numberLength === 6){
                    //Tail five
                    results.push("244")
                    if(specialLetters != '') specialLetters += ", "
                    specialLetters += 'Tail five'
                    point += 9
                    stars += 1
                }
                else if(numberLength === 7){
                    //Tail six
                    results.push("245")
                    if(specialLetters != '') specialLetters += ", "
                    specialLetters += 'Tail six'
                    point += 10
                    stars += 1
                }
                else if(numberLength === 4){
                    //Tail three
                    point += 7
                    stars += 1
                    if(specialLetters != '') specialLetters += ", "
                    specialLetters += 'Tail Three'
                }
                else{
                    point += 6
                }
            }
            else{
                point += 6
            }
        }
        else{
            point += 6
        }
    }

    var isSerialNumber = function(numString) {
        for (let i = 1; i < numString.length; i++) {
          if (parseInt(numString[i]) !== parseInt(numString[i - 1]) + 1) {
            return false;
          }
        }
        return true;
    }

    var isSerialRepeatNumber = function(numString) {
        for (let i = 1; i < numString.length ; i++) {
          let status = true
          if (parseInt(numString[i]) !== parseInt(numString[i - 1])) {
            if(parseInt(numString[i]) !== parseInt(numString[i - 1]) + 1){
                status = false
            }
            else{
            status = true
            }
          }
          else{
            status = true
          }

          if(!status)
            return status
        }
        return true
    }

    var isSymmetricNumber = function(numString) {
      
        // Reverse the string
        const reversedString = numString.split('').reverse().join('');
      
        // Check if the original and reversed strings are equal
        return numString === reversedString;
    }

    
    //Serial Types
    if(numberLength > 2){
        if(isSerialNumber(numberString)){
            //Serial num
            results.push("246")
            if(specialLetters != '') specialLetters += ", "
            specialLetters += 'Serial num'
            point += 10
            stars += 1
        }
        else if(isSerialRepeatNumber(numberString)){
            //Serial repeat
            results.push("247")
            if(specialLetters != '') specialLetters += ", "
            specialLetters += 'Serial repeat'
            point += 7
            stars += 1
        }
        else if(isSymmetricNumber(numberString)){
            //Symmetric num
            results.push("248")
            if(specialLetters != '') specialLetters += ", "
            specialLetters += 'Symmetric num'
            point += 8
            stars += 1
        }
    }

    if(stars > 5) stars = 5
    
    var diamondTypes = {
        types      : results,
        shape      : shape,
        stars      : stars,
        colorRatio : parseFloat(maxRatio.toFixed(1)),
        colorName  : ratioColorName,
        point      : point,
        sumOfColors: `${allColors} colors`,
        specialLetters: specialLetters
    }
    return diamondTypes
}