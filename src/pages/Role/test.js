// 1、简单数组简单排序
var arrSimple= new Array(1,8,7,6);
arrSimple.sort();
console.log(arrSimple.join());


// 2、简单数组自定义排序 (简化一下：a-b输出从小到大排序，b-a输出从大到小排序)
var arrSimple2=new Array(1,8,7,6);
arrSimple2.sort(function(a,b){ return b-a});
console.log(arrSimple2.join());


// 3、问题 实战
let array =
    [
        {
            "title": "X",
            "items": [
                {
                    "singerName": "薛之谦",
                    "id": "5062",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000",
                    "prefix": "X"
                },
                {
                    "singerName": "许嵩",
                    "id": "7221",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg?max_age=2592000",
                    "prefix": "X"
                },
                {
                    "singerName": "萧敬腾",
                    "id": "13203",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004bsIDK0awMOv.jpg?max_age=2592000",
                    "prefix": "X"
                },
                {
                    "singerName": "许巍",
                    "id": "3376",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M00000235pCx2tYjlq.jpg?max_age=2592000",
                    "prefix": "X"
                },
                {
                    "singerName": "徐良",
                    "id": "22704",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004aRKga0CXIPm.jpg?max_age=2592000",
                    "prefix": "X"
                },
                {
                    "singerName": "夏婉安",
                    "id": "23800",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001oNMzI3WznzG.jpg?max_age=2592000",
                    "prefix": "X"
                },
                {
                    "singerName": "徐佳莹",
                    "id": "16244",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002LZVMH0zc8F4.jpg?max_age=2592000",
                    "prefix": "X"
                }
            ]
        },
        {
            "title": "Z",
            "items": [
                {
                    "singerName": "周杰伦",
                    "id": "4558",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000025NhlN2yWrP4.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张杰",
                    "id": "6499",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002azErJ0UcDN6.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "庄心妍",
                    "id": "89698",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003Cn3Yh16q1MO.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张碧晨",
                    "id": "199515",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000003ZpE43ypssl.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张学友",
                    "id": "174",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004Be55m1SJaLk.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张靓颖",
                    "id": "4607",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000aw4WC2EQYTv.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张惠妹",
                    "id": "141",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003JGrNQ3RjelA.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "周传雄",
                    "id": "4365",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004NMZuf2BLjg8.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张信哲",
                    "id": "167",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000000mFvh1jtLcz.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张宇",
                    "id": "168",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000044wQXL0ElWF1.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张磊",
                    "id": "1012038",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004eaDNU1nfRO0.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张韶涵",
                    "id": "224",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002raUWw3PXdkT.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "周二珂",
                    "id": "968571",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000042kZuh1dgLre.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张敬轩",
                    "id": "219",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003AfDK34H82GU.jpg?max_age=2592000",
                    "prefix": "Z"
                },
                {
                    "singerName": "张赫宣",
                    "id": "63938",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000SJp6n49rDgl.jpg?max_age=2592000",
                    "prefix": "Z"
                }
            ]
        },
        {
            "title": "B",
            "items": [
                {
                    "singerName": "BIGBANG (??)",
                    "id": "11733",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000",
                    "prefix": "B"
                },
                {
                    "singerName": "BEYOND",
                    "id": "2",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002pUZT93gF4Cu.jpg?max_age=2592000",
                    "prefix": "B"
                },
                {
                    "singerName": "本兮",
                    "id": "4545",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003LaMHm42u7qS.jpg?max_age=2592000",
                    "prefix": "B"
                },
                {
                    "singerName": "BLACKPINK",
                    "id": "1190986",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003DBAjk2MMfhR.jpg?max_age=2592000",
                    "prefix": "B"
                }
            ]
        },
        {
            "title": "C",
            "items": [
                {
                    "singerName": "陈奕迅",
                    "id": "143",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003Nz2So3XXYek.jpg?max_age=2592000",
                    "prefix": "C"
                },
                {
                    "singerName": "陈小春",
                    "id": "4284",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004DFS271osAwp.jpg?max_age=2592000",
                    "prefix": "C"
                },
                {
                    "singerName": "Charlie Puth (查理·普斯)",
                    "id": "39000",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000jnR7q3pCzYG.jpg?max_age=2592000",
                    "prefix": "C"
                },
                {
                    "singerName": "陈翔",
                    "id": "22926",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004EyqQS2hMS6V.jpg?max_age=2592000",
                    "prefix": "C"
                },
                {
                    "singerName": "蔡健雅",
                    "id": "112",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000hNnWC3kko2c.jpg?max_age=2592000",
                    "prefix": "C"
                }
            ]
        },
        {
            "title": "L",
            "items": [
                {
                    "singerName": "林俊杰",
                    "id": "4286",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001BLpXF2DyJe2.jpg?max_age=2592000",
                    "prefix": "L"
                },
                {
                    "singerName": "李荣浩",
                    "id": "60505",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000aHmbL2aPXWH.jpg?max_age=2592000",
                    "prefix": "L"
                },
                {
                    "singerName": "鹿晗",
                    "id": "204664",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001SqkF53OEhdO.jpg?max_age=2592000",
                    "prefix": "L"
                },
                {
                    "singerName": "林宥嘉",
                    "id": "11606",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001f0VyZ1hmWZ1.jpg?max_age=2592000",
                    "prefix": "L"
                },
                {
                    "singerName": "李易峰",
                    "id": "11707",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002xpOdd4Dh6pu.jpg?max_age=2592000",
                    "prefix": "L"
                },
                {
                    "singerName": "李宇春",
                    "id": "4615",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002ZOuVm3Qn20Y.jpg?max_age=2592000",
                    "prefix": "L"
                },
                {
                    "singerName": "李圣杰",
                    "id": "38",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002seUhN1Akj7J.jpg?max_age=2592000",
                    "prefix": "L"
                },
                {
                    "singerName": "刘瑞琦",
                    "id": "161444",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003bQEFA3KrvLI.jpg?max_age=2592000",
                    "prefix": "L"
                },
                {
                    "singerName": "刘德华",
                    "id": "163",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003aQYLo2x8izP.jpg?max_age=2592000",
                    "prefix": "L"
                },
                {
                    "singerName": "李克勤",
                    "id": "235",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003nS2v740Lxcw.jpg?max_age=2592000",
                    "prefix": "L"
                }
            ]
        },
        {
            "title": "A",
            "items": [
                {
                    "singerName": "Alan Walker (艾伦·沃克)",
                    "id": "944940",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000020PeOh4ZaCw1.jpg?max_age=2592000",
                    "prefix": "A"
                },
                {
                    "singerName": "A-Lin",
                    "id": "6028",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003ArN8Z0WpjTz.jpg?max_age=2592000",
                    "prefix": "A"
                },
                {
                    "singerName": "Adele (阿黛尔)",
                    "id": "12578",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003CoxJh1zFPpx.jpg?max_age=2592000",
                    "prefix": "A"
                }
            ]
        },
        {
            "title": "T",
            "items": [
                {
                    "singerName": "TFBOYS",
                    "id": "34412",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000zmpju02bEBm.jpg?max_age=2592000",
                    "prefix": "T"
                },
                {
                    "singerName": "田馥甄",
                    "id": "4701",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001ByAsv3XCdgm.jpg?max_age=2592000",
                    "prefix": "T"
                },
                {
                    "singerName": "The Chainsmokers (烟民二人组)",
                    "id": "156095",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004ABIFV1EZUAj.jpg?max_age=2592000",
                    "prefix": "T"
                },
                {
                    "singerName": "Tez Cadey",
                    "id": "947788",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000ndQx82fsq8Z.jpg?max_age=2592000",
                    "prefix": "T"
                },
                {
                    "singerName": "逃跑计划",
                    "id": "15514",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001Yxpxc0OaUUX.jpg?max_age=2592000",
                    "prefix": "T"
                },
                {
                    "singerName": "谭晶",
                    "id": "6370",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000QG95i2rHlOf.jpg?max_age=2592000",
                    "prefix": "T"
                }
            ]
        },
        {
            "title": "M",
            "items": [
                {
                    "singerName": "Maroon 5 (魔力红乐团)",
                    "id": "4983",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001JuGrt372YIQ.jpg?max_age=2592000",
                    "prefix": "M"
                },
                {
                    "singerName": "MC天佑",
                    "id": "160022",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000035kILA0ydw3j.jpg?max_age=2592000",
                    "prefix": "M"
                },
                {
                    "singerName": "MC魏小然",
                    "id": "1045852",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000WbpKa3WokLD.jpg?max_age=2592000",
                    "prefix": "M"
                },
                {
                    "singerName": "莫文蔚",
                    "id": "54",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000cISVf2QqLc6.jpg?max_age=2592000",
                    "prefix": "M"
                },
                {
                    "singerName": "马旭东",
                    "id": "28227",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003wWQBU0fHBcj.jpg?max_age=2592000",
                    "prefix": "M"
                },
                {
                    "singerName": "萌萌哒天团",
                    "id": "943468",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003rJfMG3PPqWd.jpg?max_age=2592000",
                    "prefix": "M"
                }
            ]
        },
        {
            "title": "G",
            "items": [
                {
                    "singerName": "G.E.M. 邓紫棋",
                    "id": "13948",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001fNHEf1SFEFN.jpg?max_age=2592000",
                    "prefix": "G"
                },
                {
                    "singerName": "G-DRAGON (权志龙)",
                    "id": "19851",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000t2qd13dLpae.jpg?max_age=2592000",
                    "prefix": "G"
                },
                {
                    "singerName": "葛林",
                    "id": "61959",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002OfR3n1vx75j.jpg?max_age=2592000",
                    "prefix": "G"
                },
                {
                    "singerName": "郭静",
                    "id": "11626",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000043Zxw10txf5O.jpg?max_age=2592000",
                    "prefix": "G"
                }
            ]
        },
        {
            "title": "Y",
            "items": [
                {
                    "singerName": "杨宗纬",
                    "id": "11608",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003tMm0y0TuewY.jpg?max_age=2592000",
                    "prefix": "Y"
                },
                {
                    "singerName": "杨洋",
                    "id": "944274",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004coWV04C5FCV.jpg?max_age=2592000",
                    "prefix": "Y"
                },
                {
                    "singerName": "雨宗林",
                    "id": "7485",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004FtTNW2b0tJi.jpg?max_age=2592000",
                    "prefix": "Y"
                },
                {
                    "singerName": "易烊千玺",
                    "id": "198135",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001IoTZp19YMDG.jpg?max_age=2592000",
                    "prefix": "Y"
                }
            ]
        },
        {
            "title": "J",
            "items": [
                {
                    "singerName": "Justin Bieber (贾斯汀·比伯)",
                    "id": "16257",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002DYpxl3hW3EP.jpg?max_age=2592000",
                    "prefix": "J"
                },
                {
                    "singerName": "金志文",
                    "id": "12111",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004YXxql1sSr2o.jpg?max_age=2592000",
                    "prefix": "J"
                },
                {
                    "singerName": "Jam",
                    "id": "1041231",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000023ni2j3F9CpN.jpg?max_age=2592000",
                    "prefix": "J"
                },
                {
                    "singerName": "金南玲",
                    "id": "44018",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001m7JoC1IVL44.jpg?max_age=2592000",
                    "prefix": "J"
                }
            ]
        },
        {
            "title": "H",
            "items": [
                {
                    "singerName": "华晨宇",
                    "id": "163550",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002Vcz8F2hpBQj.jpg?max_age=2592000",
                    "prefix": "H"
                },
                {
                    "singerName": "胡夏",
                    "id": "24833",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002mze3U0NYXOM.jpg?max_age=2592000",
                    "prefix": "H"
                },
                {
                    "singerName": "韩安旭",
                    "id": "1043567",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004QoDUs3jfOC6.jpg?max_age=2592000",
                    "prefix": "H"
                }
            ]
        },
        {
            "title": "R",
            "items": [
                {
                    "singerName": "RADWIMPS (ラッドウィンプス)",
                    "id": "9962",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000f1b6W1wzyRN.jpg?max_age=2592000",
                    "prefix": "R"
                },
                {
                    "singerName": "Rihanna (蕾哈娜)",
                    "id": "6966",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002MiBdR19HQWx.jpg?max_age=2592000",
                    "prefix": "R"
                }
            ]
        },
        {
            "title": "N",
            "items": [
                {
                    "singerName": "那英",
                    "id": "137",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003LCFXH0eodXv.jpg?max_age=2592000",
                    "prefix": "N"
                },
                {
                    "singerName": "南征北战",
                    "id": "69205",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003ZQQb64D5317.jpg?max_age=2592000",
                    "prefix": "N"
                },
                {
                    "singerName": "牛奶咖啡",
                    "id": "4422",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000012bj8d36Xkw1.jpg?max_age=2592000",
                    "prefix": "N"
                }
            ]
        },
        {
            "title": "W",
            "items": [
                {
                    "singerName": "王力宏",
                    "id": "265",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001JDzPT3JdvqK.jpg?max_age=2592000",
                    "prefix": "W"
                },
                {
                    "singerName": "吴亦凡",
                    "id": "180646",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002yeznU3VAVEV.jpg?max_age=2592000",
                    "prefix": "W"
                },
                {
                    "singerName": "汪苏泷",
                    "id": "3954",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001z2JmX09LLgL.jpg?max_age=2592000",
                    "prefix": "W"
                },
                {
                    "singerName": "王菲",
                    "id": "264",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000GDDuQ3sGQiT.jpg?max_age=2592000",
                    "prefix": "W"
                },
                {
                    "singerName": "Wiz Khalifa (维兹·卡利法)",
                    "id": "12978",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000CQ06r24Naco.jpg?max_age=2592000",
                    "prefix": "W"
                },
                {
                    "singerName": "汪峰",
                    "id": "4604",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001adLDR1SS40P.jpg?max_age=2592000",
                    "prefix": "W"
                },
                {
                    "singerName": "威仔",
                    "id": "38625",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001WcO2V0TLCv3.jpg?max_age=2592000",
                    "prefix": "W"
                }
            ]
        },
        {
            "title": "S",
            "items": [
                {
                    "singerName": "苏打绿",
                    "id": "5924",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000Q4W691sMvLG.jpg?max_age=2592000",
                    "prefix": "S"
                },
                {
                    "singerName": "孙子涵",
                    "id": "22874",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001oXbjs29oPul.jpg?max_age=2592000",
                    "prefix": "S"
                },
                {
                    "singerName": "宋冬野",
                    "id": "61620",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004KKLWZ4320g1.jpg?max_age=2592000",
                    "prefix": "S"
                },
                {
                    "singerName": "孙燕姿",
                    "id": "109",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001pWERg3vFgg8.jpg?max_age=2592000",
                    "prefix": "S"
                },
                {
                    "singerName": "双笙",
                    "id": "1011983",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001t94rh4OpQn0.jpg?max_age=2592000",
                    "prefix": "S"
                }
            ]
        },
        {
            "title": "P",
            "items": [
                {
                    "singerName": "朴树",
                    "id": "4442",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000mLAT42CFWNa.jpg?max_age=2592000",
                    "prefix": "P"
                },
                {
                    "singerName": "鹏泊",
                    "id": "1102711",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003vSrlp0ujV6o.jpg?max_age=2592000",
                    "prefix": "P"
                }
            ]
        },
        {
            "title": "K",
            "items": [
                {
                    "singerName": "筷子兄弟",
                    "id": "11761",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002Sm9iK4RIsCr.jpg?max_age=2592000",
                    "prefix": "K"
                }
            ]
        },
        {
            "title": "Q",
            "items": [
                {
                    "singerName": "曲婉婷",
                    "id": "34703",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000030RkE50nmpWC.jpg?max_age=2592000",
                    "prefix": "Q"
                },
                {
                    "singerName": "齐一",
                    "id": "1042260",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000020IaUo4Vgsjk.jpg?max_age=2592000",
                    "prefix": "Q"
                },
                {
                    "singerName": "齐晨",
                    "id": "40798",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000H4xDG3heHtr.jpg?max_age=2592000",
                    "prefix": "Q"
                }
            ]
        },
        {
            "title": "F",
            "items": [
                {
                    "singerName": "Fall Out Boy (打倒男孩)",
                    "id": "4868",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003CKb192ggBqi.jpg?max_age=2592000",
                    "prefix": "F"
                },
                {
                    "singerName": "范玮琪",
                    "id": "4351",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003vyG9q2klWs4.jpg?max_age=2592000",
                    "prefix": "F"
                }
            ]
        },
        {
            "title": "E",
            "items": [
                {
                    "singerName": "Eminem (艾米纳姆)",
                    "id": "4880",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000yDAjj2TE9j8.jpg?max_age=2592000",
                    "prefix": "E"
                }
            ]
        },
        {
            "title": "#",
            "items": [
                {
                    "singerName": "????? (防弹少年团)",
                    "id": "162691",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001TpDgn4SxyJn.jpg?max_age=2592000",
                    "prefix": "9"
                }
            ]
        },
        {
            "title": "O",
            "items": [
                {
                    "singerName": "Owl City (猫头鹰之城)",
                    "id": "12926",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002a1DuK4evNsR.jpg?max_age=2592000",
                    "prefix": "O"
                },
                {
                    "singerName": "One Direction (单向组合)",
                    "id": "24561",
                    "imgUrl": "https://y.gtimg.cn/music/photo_new/T001R300x300M000001FXn5P0kkWfV.jpg?max_age=2592000",
                    "prefix": "O"
                }
            ]
        }
    ]
array.sort(function (a, b) {
    return (a.title.charCodeAt(0)) - (b.title.charCodeAt(0)) // 这里原来是 >  导致排序是失败的！ return (a.title.charCodeAt(0)) > (b.title.charCodeAt(0))
})
console.log(array)