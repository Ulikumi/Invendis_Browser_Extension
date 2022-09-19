let NotUpdatingIssues = [];
let siteData = [
  {
    ID: 604261,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 604262,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 604263,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 604264,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 604265,
    TL: "Isaac Furgusson",
  },
  {
    ID: 604266,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 604267,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 604271,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 604273,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 604334,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 604335,
    TL: "Isaac Furgusson",
  },
  {
    ID: 604336,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 604337,
    TL: "John Ayama",
  },
  {
    ID: 604338,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 604344,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 604447,
    TL: "Richmond Kesseh",
  },
  {
    ID: 604476,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 604477,
    TL: "Peter Boateng",
  },
  {
    ID: 604478,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 604479,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 604480,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 604481,
    TL: "Victor Mensah",
  },
  {
    ID: 604482,
    TL: "Victor Mensah",
  },
  {
    ID: 604483,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 604512,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 604513,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 604514,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 604515,
    TL: "Victor Mensah",
  },
  {
    ID: 604517,
    TL: "Isaac Furgusson",
  },
  {
    ID: 604519,
    TL: "Jacob Achaare",
  },
  {
    ID: 604520,
    TL: "Jacob Achaare",
  },
  {
    ID: 604521,
    TL: "Jacob Achaare",
  },
  {
    ID: 604537,
    TL: "Augustine Owusu",
  },
  {
    ID: 604538,
    TL: "Augustine Owusu",
  },
  {
    ID: 604539,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 604540,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 604541,
    TL: "Augustine Owusu",
  },
  {
    ID: 604552,
    TL: "Victor Mensah",
  },
  {
    ID: 604554,
    TL: "Augustine Owusu",
  },
  {
    ID: 604581,
    TL: "Jacob Achaare",
  },
  {
    ID: 604583,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 604588,
    TL: "Benjamin Essuman",
  },
  {
    ID: 604592,
    TL: "Jacob Achaare",
  },
  {
    ID: 604593,
    TL: "Augustine Owusu",
  },
  {
    ID: 604594,
    TL: "Augustine Owusu",
  },
  {
    ID: 604599,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 604640,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 604641,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 604642,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 604656,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 604657,
    TL: "Victor Mensah",
  },
  {
    ID: 604659,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 604424,
    TL: "Richmond Kesseh",
  },
  {
    ID: 604446,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 604470,
    TL: "Courage Mensah",
  },
  {
    ID: 604471,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 604472,
    TL: "Courage Mensah",
  },
  {
    ID: 604473,
    TL: "Courage Mensah",
  },
  {
    ID: 604474,
    TL: "Richmond Kesseh",
  },
  {
    ID: 604475,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 604536,
    TL: "Richmond Kesseh",
  },
  {
    ID: 604542,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 604543,
    TL: "Benjamin Essuman",
  },
  {
    ID: 604590,
    TL: "Benjamin Essuman",
  },
  {
    ID: 604591,
    TL: "Benjamin Essuman",
  },
  {
    ID: 604601,
    TL: "Benjamin Essuman",
  },
  {
    ID: 604602,
    TL: "Richmond Kesseh",
  },
  {
    ID: 604639,
    TL: "Courage Mensah",
  },
  {
    ID: 604707,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 604739,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 604753,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 604754,
    TL: "Jacob Achaare",
  },
  {
    ID: 604755,
    TL: "Augustine Owusu",
  },
  {
    ID: 604756,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 604766,
    TL: "Victor Mensah",
  },
  {
    ID: 604767,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 604800,
    TL: "Peter Boateng",
  },
  {
    ID: 604849,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 604853,
    TL: "John Ayama",
  },
  {
    ID: 604855,
    TL: "Isaac Furgusson",
  },
  {
    ID: 604858,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 604859,
    TL: "John Ayama",
  },
  {
    ID: 604860,
    TL: "Jacob Achaare",
  },
  {
    ID: 604861,
    TL: "Isaac Furgusson",
  },
  {
    ID: 604862,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 604863,
    TL: "Peter Boateng",
  },
  {
    ID: 604864,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 604871,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 604885,
    TL: "Peter Boateng",
  },
  {
    ID: 604888,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 604896,
    TL: "Augustine Owusu",
  },
  {
    ID: 604902,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 604903,
    TL: "Isaac Furgusson",
  },
  {
    ID: 604906,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 604907,
    TL: "Peter Boateng",
  },
  {
    ID: 604917,
    TL: "John Ayama",
  },
  {
    ID: 604934,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 604938,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 604947,
    TL: "Isaac Furgusson",
  },
  {
    ID: 604951,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 604983,
    TL: "Peter Boateng",
  },
  {
    ID: 604987,
    TL: "Victor Mensah",
  },
  {
    ID: 604988,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 604998,
    TL: "Jacob Achaare",
  },
  {
    ID: 612677,
    TL: "Augustine Owusu",
  },
  {
    ID: 601451,
    TL: "Augustine Owusu",
  },
  {
    ID: 601459,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601085,
    TL: "Benjamin Essuman",
  },
  {
    ID: 600482,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601074,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 601829,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601419,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601072,
    TL: "Victor Mensah",
  },
  {
    ID: 602173,
    TL: "Jacob Achaare",
  },
  {
    ID: 601484,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601452,
    TL: "Augustine Owusu",
  },
  {
    ID: 600496,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601731,
    TL: "Benjamin Essuman",
  },
  {
    ID: 602024,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601086,
    TL: "Jacob Achaare",
  },
  {
    ID: 600744,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601403,
    TL: "Victor Mensah",
  },
  {
    ID: 601747,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601740,
    TL: "Isaac Furgusson",
  },
  {
    ID: 602493,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 601736,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601056,
    TL: "Jacob Achaare",
  },
  {
    ID: 602023,
    TL: "Victor Mensah",
  },
  {
    ID: 601756,
    TL: "Benjamin Essuman",
  },
  {
    ID: 601396,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601080,
    TL: "Jacob Achaare",
  },
  {
    ID: 601069,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601720,
    TL: "Jacob Achaare",
  },
  {
    ID: 601081,
    TL: "Benjamin Essuman",
  },
  {
    ID: 601722,
    TL: "Isaac Furgusson",
  },
  {
    ID: 600578,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601113,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 601733,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601828,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601741,
    TL: "Isaac Furgusson",
  },
  {
    ID: 600770,
    TL: "Victor Mensah",
  },
  {
    ID: 601827,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601093,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601453,
    TL: "Augustine Owusu",
  },
  {
    ID: 601092,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601742,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601068,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601449,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601738,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 600536,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 602005,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601088,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601089,
    TL: "Benjamin Essuman",
  },
  {
    ID: 600472,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601078,
    TL: "Jacob Achaare",
  },
  {
    ID: 601744,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601450,
    TL: "Victor Mensah",
  },
  {
    ID: 601075,
    TL: "Benjamin Essuman",
  },
  {
    ID: 600483,
    TL: "Augustine Owusu",
  },
  {
    ID: 602495,
    TL: "Augustine Owusu",
  },
  {
    ID: 601421,
    TL: "Jacob Achaare",
  },
  {
    ID: 602494,
    TL: "Augustine Owusu",
  },
  {
    ID: 601397,
    TL: "Victor Mensah",
  },
  {
    ID: 600582,
    TL: "Jacob Achaare",
  },
  {
    ID: 602025,
    TL: "Augustine Owusu",
  },
  {
    ID: 601095,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 601420,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 601732,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601482,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 601730,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 600471,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601123,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601399,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601729,
    TL: "Augustine Owusu",
  },
  {
    ID: 601737,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 600769,
    TL: "Augustine Owusu",
  },
  {
    ID: 601073,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 602026,
    TL: "Benjamin Essuman",
  },
  {
    ID: 601077,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 602184,
    TL: "Augustine Owusu",
  },
  {
    ID: 601483,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 601087,
    TL: "Benjamin Essuman",
  },
  {
    ID: 601067,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 600577,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 601070,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601719,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 600479,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 601071,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 601398,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 600579,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 602001,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601458,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601042,
    TL: "Victor Mensah",
  },
  {
    ID: 601727,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601400,
    TL: "Victor Mensah",
  },
  {
    ID: 601395,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601051,
    TL: "Augustine Owusu",
  },
  {
    ID: 601094,
    TL: "Augustine Owusu",
  },
  {
    ID: 600773,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 602172,
    TL: "Benjamin Essuman",
  },
  {
    ID: 601084,
    TL: "Benjamin Essuman",
  },
  {
    ID: 600583,
    TL: "Benjamin Essuman",
  },
  {
    ID: 602183,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 601734,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601079,
    TL: "Jacob Achaare",
  },
  {
    ID: 601394,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 601841,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 602004,
    TL: "Jacob Achaare",
  },
  {
    ID: 600530,
    TL: "Jacob Achaare",
  },
  {
    ID: 601402,
    TL: "Victor Mensah",
  },
  {
    ID: 600481,
    TL: "Victor Mensah",
  },
  {
    ID: 600528,
    TL: "Jacob Achaare",
  },
  {
    ID: 601743,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 601401,
    TL: "Jacob Achaare",
  },
  {
    ID: 602022,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601066,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 601404,
    TL: "Victor Mensah",
  },
  {
    ID: 601739,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 602117,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601454,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 601728,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 600473,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601832,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 602003,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601830,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601082,
    TL: "Benjamin Essuman",
  },
  {
    ID: 602333,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 600776,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 601091,
    TL: "Victor Mensah",
  },
  {
    ID: 602299,
    TL: "Victor Mensah",
  },
  {
    ID: 601405,
    TL: "Isaac Furgusson",
  },
  {
    ID: 601735,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601065,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 600772,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601939,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 600771,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 601929,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 601831,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 601076,
    TL: "Victor Mensah",
  },
  {
    ID: 601422,
    TL: "Isaac Furgusson",
  },
  {
    ID: 602475,
    TL: "Victor Mensah",
  },
  {
    ID: 602002,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 600580,
    TL: "Jacob Achaare",
  },
  {
    ID: 601839,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601755,
    TL: "John Ayama",
  },
  {
    ID: 600571,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 600575,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 602194,
    TL: "Augustine Owusu",
  },
  {
    ID: 601064,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601834,
    TL: "John Ayama",
  },
  {
    ID: 601062,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 600555,
    TL: "John Ayama",
  },
  {
    ID: 601429,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601054,
    TL: "John Ayama",
  },
  {
    ID: 600574,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601427,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601485,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 602365,
    TL: "Peter Boateng",
  },
  {
    ID: 601060,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601055,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601723,
    TL: "John Ayama",
  },
  {
    ID: 601749,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601423,
    TL: "Peter Boateng",
  },
  {
    ID: 601753,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601424,
    TL: "John Ayama",
  },
  {
    ID: 601840,
    TL: "Peter Boateng",
  },
  {
    ID: 601061,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601700,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 601724,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601726,
    TL: "Peter Boateng",
  },
  {
    ID: 601059,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 600586,
    TL: "Peter Boateng",
  },
  {
    ID: 601425,
    TL: "John Ayama",
  },
  {
    ID: 601426,
    TL: "John Ayama",
  },
  {
    ID: 602116,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 601752,
    TL: "Peter Boateng",
  },
  {
    ID: 600573,
    TL: "John Ayama",
  },
  {
    ID: 601052,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 601838,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601748,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 601751,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 601835,
    TL: "John Ayama",
  },
  {
    ID: 602182,
    TL: "Peter Boateng",
  },
  {
    ID: 600518,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601836,
    TL: "John Ayama",
  },
  {
    ID: 602178,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 601754,
    TL: "John Ayama",
  },
  {
    ID: 600572,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 601725,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601750,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 600488,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601058,
    TL: "John Ayama",
  },
  {
    ID: 601057,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 601428,
    TL: "Peter Boateng",
  },
  {
    ID: 601837,
    TL: "John Ayama",
  },
  {
    ID: 601746,
    TL: "Peter Boateng",
  },
  {
    ID: 601053,
    TL: "John Ayama",
  },
  {
    ID: 601063,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 600556,
    TL: "Peter Boateng",
  },
  {
    ID: 601760,
    TL: "Courage Mensah",
  },
  {
    ID: 601699,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 601105,
    TL: "Courage Mensah",
  },
  {
    ID: 601765,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601809,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601457,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 601104,
    TL: "Courage Mensah",
  },
  {
    ID: 601109,
    TL: "Richmond Kesseh",
  },
  {
    ID: 600553,
    TL: "Courage Mensah",
  },
  {
    ID: 600552,
    TL: "Courage Mensah",
  },
  {
    ID: 601456,
    TL: "Courage Mensah",
  },
  {
    ID: 601810,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 601759,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601931,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601833,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601455,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601110,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 601763,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601103,
    TL: "Courage Mensah",
  },
  {
    ID: 601108,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601769,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601100,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 601044,
    TL: "Courage Mensah",
  },
  {
    ID: 600585,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601766,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601106,
    TL: "Courage Mensah",
  },
  {
    ID: 601758,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601102,
    TL: "Courage Mensah",
  },
  {
    ID: 601431,
    TL: "Ayuba Dramani",
  },
  {
    ID: 600554,
    TL: "Courage Mensah",
  },
  {
    ID: 602195,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 602118,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601764,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601111,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601768,
    TL: "Courage Mensah",
  },
  {
    ID: 601107,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601757,
    TL: "Courage Mensah",
  },
  {
    ID: 601843,
    TL: "Richmond Kesseh",
  },
  {
    ID: 601097,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601762,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601101,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 602287,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 601761,
    TL: "Courage Mensah",
  },
  {
    ID: 601432,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601098,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 601430,
    TL: "Ayuba Dramani",
  },
  {
    ID: 601767,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 602218,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 602462,
    TL: "Benjamin Essuman",
  },
  {
    ID: 602461,
    TL: "Ayuba Dramani",
  },
  {
    ID: 602449,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 602455,
    TL: "Victor Mensah",
  },
  {
    ID: 602453,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 602450,
    TL: "Victor Mensah",
  },
  {
    ID: 602458,
    TL: "Courage Mensah",
  },
  {
    ID: 602484,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 602454,
    TL: "Isaac Furgusson",
  },
  {
    ID: 602483,
    TL: "Benjamin Essuman",
  },
  {
    ID: 600616,
    TL: "Ayuba Dramani",
  },
  {
    ID: 600976,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 602482,
    TL: "Jacob Achaare",
  },
  {
    ID: 602576,
    TL: "Isaac Furgusson",
  },
  {
    ID: 602564,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 602577,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 602611,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 602541,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 602540,
    TL: "Victor Mensah",
  },
  {
    ID: 602594,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 602542,
    TL: "Benjamin Essuman",
  },
  {
    ID: 602548,
    TL: "Ayuba Dramani",
  },
  {
    ID: 602543,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 602546,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 602547,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 602590,
    TL: "Victor Mensah",
  },
  {
    ID: 602614,
    TL: "Peter Boateng",
  },
  {
    ID: 602620,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 602599,
    TL: "Peter Boateng",
  },
  {
    ID: 602544,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 602591,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 602589,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 602602,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 602615,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 602539,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 602612,
    TL: "Isaac Furgusson",
  },
  {
    ID: 602592,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 602603,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 602545,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 602593,
    TL: "Isaac Furgusson",
  },
  {
    ID: 602595,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 602653,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 602651,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 602666,
    TL: "Courage Mensah",
  },
  {
    ID: 602652,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 602699,
    TL: "Isaac Furgusson",
  },
  {
    ID: 602549,
    TL: "Ayuba Dramani",
  },
  {
    ID: 602696,
    TL: "John Ayama",
  },
  {
    ID: 602854,
    TL: "Courage Mensah",
  },
  {
    ID: 602857,
    TL: "John Ayama",
  },
  {
    ID: 602858,
    TL: "Victor Mensah",
  },
  {
    ID: 602859,
    TL: "Augustine Owusu",
  },
  {
    ID: 602874,
    TL: "Richmond Kesseh",
  },
  {
    ID: 602963,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 602965,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 602966,
    TL: "Jacob Achaare",
  },
  {
    ID: 602967,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 602968,
    TL: "Benjamin Essuman",
  },
  {
    ID: 603198,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 603199,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 603209,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 603146,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 612666,
    TL: "Jacob Achaare",
  },
  {
    ID: 612793,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 603156,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 603368,
    TL: "Victor Mensah",
  },
  {
    ID: 612664,
    TL: "Victor Mensah",
  },
  {
    ID: 612676,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 612679,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 612682,
    TL: "Peter Boateng",
  },
  {
    ID: 612684,
    TL: "John Ayama",
  },
  {
    ID: 612685,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 612686,
    TL: "Peter Boateng",
  },
  {
    ID: 612688,
    TL: "Richmond Kesseh",
  },
  {
    ID: 612791,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 612792,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 612680,
    TL: "John Ayama",
  },
  {
    ID: 612681,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 612683,
    TL: "Peter Boateng",
  },
  {
    ID: 612687,
    TL: "Courage Mensah",
  },
  {
    ID: 604728,
    TL: "Richmond Kesseh",
  },
  {
    ID: 604801,
    TL: "Courage Mensah",
  },
  {
    ID: 604850,
    TL: "Benjamin Essuman",
  },
  {
    ID: 604868,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 604904,
    TL: "Courage Mensah",
  },
  {
    ID: 604913,
    TL: "Benjamin Essuman",
  },
  {
    ID: 604918,
    TL: "Benjamin Essuman",
  },
  {
    ID: 604922,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 612868,
    TL: "Peter Boateng",
  },
  {
    ID: 602235,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 602233,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 602230,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 602232,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 602234,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 602231,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 612458,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 612459,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 612460,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 612461,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 612462,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 612464,
    TL: "Jacob Achaare",
  },
  {
    ID: 612465,
    TL: "Jacob Achaare",
  },
  {
    ID: 612466,
    TL: "Isaac Furgusson",
  },
  {
    ID: 612467,
    TL: "Jacob Achaare",
  },
  {
    ID: 612468,
    TL: "Jacob Achaare",
  },
  {
    ID: 612469,
    TL: "Victor Mensah",
  },
  {
    ID: 612470,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 612472,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 612473,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 612474,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 612475,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 612476,
    TL: "Jacob Achaare",
  },
  {
    ID: 612477,
    TL: "Jacob Achaare",
  },
  {
    ID: 612478,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 612479,
    TL: "Augustine Owusu",
  },
  {
    ID: 612480,
    TL: "Augustine Owusu",
  },
  {
    ID: 612481,
    TL: "Isaac Furgusson",
  },
  {
    ID: 612483,
    TL: "Victor Mensah",
  },
  {
    ID: 612484,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 612485,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 612486,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 612487,
    TL: "Victor Mensah",
  },
  {
    ID: 612490,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 612491,
    TL: "Augustine Owusu",
  },
  {
    ID: 612492,
    TL: "Augustine Owusu",
  },
  {
    ID: 612493,
    TL: "Victor Mensah",
  },
  {
    ID: 612494,
    TL: "Augustine Owusu",
  },
  {
    ID: 612495,
    TL: "Isaac Furgusson",
  },
  {
    ID: 612496,
    TL: "Augustine Owusu",
  },
  {
    ID: 612497,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 612498,
    TL: "Isaac Furgusson",
  },
  {
    ID: 612499,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 612500,
    TL: "Isaac Furgusson",
  },
  {
    ID: 612501,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 612504,
    TL: "Isaac Furgusson",
  },
  {
    ID: 612505,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 612506,
    TL: "Isaac Furgusson",
  },
  {
    ID: 612508,
    TL: "Victor Mensah",
  },
  {
    ID: 612509,
    TL: "Jacob Achaare",
  },
  {
    ID: 612510,
    TL: "Isaac Furgusson",
  },
  {
    ID: 612511,
    TL: "Victor Mensah",
  },
  {
    ID: 612512,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 612513,
    TL: "Augustine Owusu",
  },
  {
    ID: 612514,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 612515,
    TL: "Victor Mensah",
  },
  {
    ID: 612516,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 612517,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 612518,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 612519,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 612520,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 612521,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 612522,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 612523,
    TL: "Peter Boateng",
  },
  {
    ID: 612524,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 612525,
    TL: "John Ayama",
  },
  {
    ID: 612526,
    TL: "John Ayama",
  },
  {
    ID: 612527,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 612528,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 612529,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 612530,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 612531,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 612532,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 612533,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 612534,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 612535,
    TL: "John Ayama",
  },
  {
    ID: 612536,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 612537,
    TL: "Peter Boateng",
  },
  {
    ID: 612538,
    TL: "Peter Boateng",
  },
  {
    ID: 612539,
    TL: "John Ayama",
  },
  {
    ID: 612540,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 612541,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 604671,
    TL: "Richmond Kesseh",
  },
  {
    ID: 604691,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 604731,
    TL: "Ayuba Dramani",
  },
  {
    ID: 604773,
    TL: "Ayuba Dramani",
  },
  {
    ID: 604967,
    TL: "Benjamin Essuman",
  },
  {
    ID: 612463,
    TL: "Benjamin Essuman",
  },
  {
    ID: 612471,
    TL: "Benjamin Essuman",
  },
  {
    ID: 612482,
    TL: "Benjamin Essuman",
  },
  {
    ID: 612488,
    TL: "Benjamin Essuman",
  },
  {
    ID: 612489,
    TL: "Benjamin Essuman",
  },
  {
    ID: 612502,
    TL: "Benjamin Essuman",
  },
  {
    ID: 612503,
    TL: "Benjamin Essuman",
  },
  {
    ID: 612507,
    TL: "Benjamin Essuman",
  },
  {
    ID: 612542,
    TL: "Ayuba Dramani",
  },
  {
    ID: 612543,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 612544,
    TL: "Courage Mensah",
  },
  {
    ID: 612545,
    TL: "Richmond Kesseh",
  },
  {
    ID: 612546,
    TL: "Courage Mensah",
  },
  {
    ID: 612547,
    TL: "Courage Mensah",
  },
  {
    ID: 612548,
    TL: "Courage Mensah",
  },
  {
    ID: 612549,
    TL: "Richmond Kesseh",
  },
  {
    ID: 612550,
    TL: "Richmond Kesseh",
  },
  {
    ID: 612551,
    TL: "Richmond Kesseh",
  },
  {
    ID: 612552,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 612553,
    TL: "Courage Mensah",
  },
  {
    ID: 612555,
    TL: "Ayuba Dramani",
  },
  {
    ID: 602844,
    TL: "Jacob Achaare",
  },
  {
    ID: 613230,
    TL: "Isaac Furgusson",
  },
  {
    ID: 613149,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 613150,
    TL: "Richmond Kesseh",
  },
  {
    ID: 613151,
    TL: "Courage Mensah",
  },
  {
    ID: 613152,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 613154,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 613241,
    TL: "Courage Mensah",
  },
  {
    ID: 613131,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 613143,
    TL: "John Ayama",
  },
  {
    ID: 613249,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 603139,
    TL: "Benjamin Essuman",
  },
  {
    ID: 602822,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 603152,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 613140,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 613144,
    TL: "Peter Boateng",
  },
  {
    ID: 613145,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 613148,
    TL: "Wilberforce Suglo",
  },
  {
    ID: 613232,
    TL: "Isaac Furgusson",
  },
  {
    ID: 613233,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 613252,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 603151,
    TL: "Isaac Furgusson",
  },
  {
    ID: 613115,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 613127,
    TL: "Victor Mensah",
  },
  {
    ID: 613130,
    TL: "Victor Mensah",
  },
  {
    ID: 613136,
    TL: "Godfred Ardeyfio",
  },
  {
    ID: 613231,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 613237,
    TL: "Emmanuel Ntoney",
  },
  {
    ID: 613239,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 613259,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 613134,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 613133,
    TL: "Bernard Siemoglo",
  },
  {
    ID: 613135,
    TL: "Augustine Owusu",
  },
  {
    ID: 613132,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 613142,
    TL: "John Ayama",
  },
  {
    ID: 613251,
    TL: "Peter Boateng",
  },
  {
    ID: 613137,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 613146,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 613128,
    TL: "Victor Mensah",
  },
  {
    ID: 613147,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 613242,
    TL: "Emmanuel Acquah",
  },
  {
    ID: 602851,
    TL: "Bright Kusi Appiah",
  },
  {
    ID: 613243,
    TL: "Courage Mensah",
  },
  {
    ID: 613153,
    TL: "Courage Mensah",
  },
  {
    ID: 613240,
    TL: "Philip Adu Boakye",
  },
  {
    ID: 613141,
    TL: "Ben Twumasi Ankrah",
  },
  {
    ID: 613238,
    TL: "John Ayama",
  },
  {
    ID: 613129,
    TL: "Augustine Owusu",
  },
  {
    ID: 603550,
    TL: "Richmond Kesseh",
  },
  {
    ID: 603553,
    TL: "Richmond Kesseh",
  },
  {
    ID: 612738,
    TL: "Godfred Ardeyfio",
  },
];
function tableToJSON() {
  return Array.from(document.querySelectorAll(".gridRowStyle"))
    .concat(Array.from(document.querySelectorAll(".gridAlternateRow")))
    .map((list) => {
      return {
        TimeStamp: list.children[0].innerText.trim(),
        SiteID: list.children[3].children[0].value.trim(),
        SiteName: list.children[4].children[0].value.trim(),
        SysVolt: list.children[11].innerText.trim(),
        DCVolt: list.children[16].innerText.trim(),
        RowRef: list,
      };
    });
}
function isHybrid(siteName) {
  return parseFloat(
    siteName
      .toLocaleLowerCase()
      .replaceAll(/[a-z]*[_]*/g, "")
      .substr(-4)
  ) > 15
    ? true
    : false;
}

function toShow({ SiteName, DCVolt, SysVolt }) {
  let show = false;
  let configuredThreshold = getThresholdFromName(SiteName);
  let currentDCVoltage = getCurrentDCVoltage(DCVolt);
  let currentSysVoltage = getCurrentSysVoltage(SysVolt);

  if (currentDCVoltage > 0 && currentDCVoltage <= configuredThreshold)
    show = true;
  if (currentSysVoltage > 0 && currentSysVoltage <= configuredThreshold)
    show = true;
  return show;
}

function issuesObject(issuesArray) {
  return issuesArray.map((tr) => {
    return {
      Date: tr.children[0].innerText.trim(),
      SiteID: tr.children[3].children[0].value.trim(),
      SiteName: tr.children[4].children[0].value.trim(),
      SysVolt: tr.children[11].innerText.trim(),
      DCVolt: tr.children[16].innerText.trim(),
    };
  });
}

function createOverlay() {
  let _overlay = document.createElement("div");
  _overlay.classList.add("info-overlay");
  _overlay.style.cssText = `position:fixed;
      top:163px;
      left:1200px;
      padding:9px;
      background-color:#1565c0 ; 
      width:auto;
      color:white;
      border-radius:10px;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      box-shadow: 1px 8px 5px 0px rgba(0,0,0,0.75);
      -webkit-box-shadow: 1px 8px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 1px 8px 5px 0px rgba(0,0,0,0.75);
      display:flex;
      z-index:1001;`;

  _overlay.innerHTML = `<p class="title">Hybrid Sites Not Updating | Count ${
  NotUpdatingIssues.length
  }| Last run: ${Date().toString().substr(4, 18)}</p>
      <div style='display:flex;align-items:center;justify-content:center;' class="body">
      <style>
      info-overlay.title{
         cursor: move;
         }
.info-overlay td{
  border:1px solid white;
  padding:0.3em;
}
.info-overlay thead td{
  background-color:#be4d25;
}
      </style>
      <table class="tg">
  <thead>
    <tr>
      <td class="tg-0lax">Last Updated @</td>
      <td class="tg-0lax">Site ID</td>
      <td class="tg-0lax">Site Name</td>
      <td class="tg-0lax">DC Voltage</td>
      <td class="tg-0lax">Sys Voltage</td>
      <td class="tg-0lax">Team Lead</td>
      <td class="tg-0lax"><a download='Hybrid_Sites_Not_Updating.csv' id='download'> Download</a></td>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>  
      </div>`;
  document.body.appendChild(_overlay);
}

function highlightIssue(row) {
  row.children[16].style.cssText = `background-color:red;color:white;`;
  row.children[11].style.cssText = `background-color:red;color:white;`;
  row.children[4].children[0].style.cssText = `background-color:red;color:white;height:20px`;
}

function getThresholdFromName(SiteName) {
  let conf = parseFloat(
    SiteName.toLocaleLowerCase()
      .replaceAll(/[a-z]*[_]*/g, "")
      .substr(-4)
  );
  return conf;
}

function getCurrentDCVoltage(_dc) {
  return parseFloat(_dc);
}

function getCurrentSysVoltage(sys) {
  return parseFloat(sys);
}

function showNotUpdating() {
  let timeDiff = null;
  document.querySelector(".info-overlay")
    ? document.querySelector(".info-overlay").remove()
    : "";
  tableToJSON().forEach(
    ({ SiteID, TimeStamp, SiteName, DCVolt, SysVolt, RowRef }) => {
      if (isHybrid(SiteName)) {
        timeDiff =
          (new Date().getTime() - new Date(TimeStamp).getTime()) /
          (1000 * 60 * 60);

        if (timeDiff > 1) {
          let TL = siteData.find((site) => site.ID == parseInt(SiteID));
          let name = TL.TL;
          (TimeStamp.includes("09/18/2022") ||  TimeStamp.includes("09/19/2022"))
            ? NotUpdatingIssues.push({
                SiteID,
                TimeStamp,
                SiteName,
                DCVolt,
                SysVolt,
                name,
              })
            : "";
        }
      }
    }
  );
  /* console.log(NotUpdatingIssues)
  return false; */
  if (NotUpdatingIssues.length > 0) {
    let sortedIssues= NotUpdatingIssues.sort((a,b) =>{
      return (a.name.toLowerCase() > b.name.toLowerCase())?1:-1
    })
    displayIssuesOverlay(sortedIssues);
    attachDownload();
     NotUpdatingIssues = [];
    
  }
}

function displayIssuesOverlay(issues) {
  createOverlay();
  dragElement(document.querySelector(".info-overlay"));
  let tpl = ``;
  issues.forEach(({ TimeStamp, SiteID, SiteName, DCVolt, SysVolt, name }) => {
    tpl =
      tpl +
      `<tr>
    <td>${TimeStamp}</td>
    <td>${SiteID}</td>
    <td>${SiteName}</td>
    <td>${DCVolt}</td>
    <td>${SysVolt}</td>
     <td>${name}</td>
  </tr>`;
  });
  document.querySelector(".body tbody").innerHTML = tpl;
}

//Drag implementation

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function attachDownload() {
 
  let formatedCSV = NotUpdatingIssues.map( ({ SiteID,
    TimeStamp,
    SiteName,
    DCVolt,
    SysVolt,
    name,}) =>{
return {
  'Last Updated Time':TimeStamp,
  'Site ID':SiteID,
  'Site Name':SiteName,
  'DC Voltage':DCVolt,
  'System Voltage':SysVolt,
  'Team Lead':name
}
  })
  const keys = Object.keys(formatedCSV[0]);
  const CSV = [
    keys.join(","),
    formatedCSV.map((row) => keys.map((key) => row[key]).join(",")).join("\n"),
  ].join("\n");
  const csvBlob = new Blob([CSV]);
  const link = document.getElementById("download");
  link.href = URL.createObjectURL(csvBlob);
}

function start() {
  showNotUpdating();
  setTimeout(start, 90000);
}
start();
