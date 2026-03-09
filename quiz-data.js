/* ★このファイルに問題を追加していきます */

const allQuizData = [
    
    /* ▼▼▼ ここに自分の問題を書いてね ▼▼▼ */

    {
        question: "「キャンフェス」とはなに？",
        difficulty: 1,                  
        image: null,
        charImage: 1,
        choices: ["キャンプフェスティバル", "キャンパスフェスティバル", "キャンセルフェスタ","キャンペーンフェス"],
        correct: "キャンパスフェスティバル",             
        explanation: "キャンパスごとに実施する小さな文化祭です"
    },

    {
        question: "神永さん(TA)の好きな食べ物は？",
        difficulty: 2,
        image: null,
        charImage: 5,
        choices: ["ラーメン", "ハンバーグ", "焼肉","寿司"],
        correct: "焼肉",
        explanation: null
    },

    {
        question: "神永さん(TA)の趣味は？",
        difficulty: 2,
        image: null,
        charImage: 5,
        choices: ["格闘ゲーム", "サッカー", "パズルゲーム","読書"],
        correct: "格闘ゲーム",
        explanation: null
    },

    {
        question: "井上(ゆ)さん(TA)の好きな食べ物は？",
        difficulty: 1,
        image: null,
        charImage: 3,
        choices: ["激辛料理", "酸っぱいもの", "しょっぱいもの","甘いもの"],
        correct: "甘いもの",
        explanation: null
    },

    {
        question: "井上(ゆ)さん(TA)の趣味は？",
        difficulty: 1,
        image: null,
        charImage: 3,
        choices: ["中国語の勉強", "韓国語の勉強", "英語の勉強"],
        correct: "韓国語の勉強",
        explanation: null
    },

    {
        question: "藤沢さん(TA)の好きな食べ物は？",
        difficulty: 1,
        image: null,
        charImage: 5,
        choices: ["アスパラ", "ブロッコリー", "ほうれん草"],
        correct: "ブロッコリー",
        explanation: null
    },

    {
        question: "藤沢さん(TA)の好きなケーキは？",
        difficulty: 1,
        image: null,
        charImage: 5,
        choices: ["ショートケーキ", "チョコケーキ", "モンブラン"],
        correct: "モンブラン",
        explanation: null
    },

    {
        question: "藤沢さん(TA)の趣味は？",
        difficulty: 1,
        image: null,
        charImage: 5,
        choices: ["カラオケ", "パズル", "ソリティア"],
        correct: "カラオケ",
        explanation: null
    },

    {
        question: "館野さん(メンター)の趣味は？",
        difficulty: 2,
        image: null,
        charImage: 1,
        choices: ["楽器を演奏する", "ライブに行く", "ビートを作る"],
        correct: "ビートを作る",
        explanation: null
    },

    {
        question: "大山さん(メンター)の好きな食べ物は？",
        difficulty: 1,
        image: null,
        charImage: 3,
        choices: ["寿司", "ステーキ", "天ぷら"],
        correct: "寿司",
        explanation: null
    },

    {
        question: "大山さん(メンター)の趣味は？",
        difficulty: 1,
        image: null,
        charImage: 3,
        choices: ["ゲーム", "小説", "漫画"],
        correct: "漫画",
        explanation: null
    },

    {
        question: "川口駅前キャンパスにとって初のプロジェクトNβ受講人数は？",
        difficulty: 5,
        image: null,
        charImage: 4,
        choices: ["5人", "7人", "10人"],
        correct: "10人",
        explanation: "6人チームと少し遅れて4人チームで始まりました"
    },

    {
        question: "キャンパスのビルの屋上にのっている生き物はなに？",
        difficulty: 4,
        image: null,
        charImage: 3,
        choices: ["ライオン", "シーサー", "ヒョウ","トラ"],
        correct: "ライオン",
        explanation: "駅の東口を出るとライオンが見えます。通学に迷わなくなります"
    },

    {
        question: "キャンパスに設置されている蛍光灯の本数は？",
        difficulty: 5,
        image: null,
        charImage: 1,
        choices: ["45台", "55台", "65台","75台","85台"],
        correct: "65台",
        explanation: null
    },

    {
        question: "キャンパスにいる生徒数は？(2025現在)",
        difficulty: 3,
        image: null,
        charImage: 2,
        choices: ["98", "113", "150"],
        correct: "113",
        explanation: null
    },

    {
        question: "キャンパスのTAの数は？(2025現在)",
        difficulty: 3,
        image: null,
        charImage: 2,
        choices: [ "3", "7","10"],
        correct: "7",
        explanation: null
    },

    {
        question: "メンターの人数は？(2025現在)",
        difficulty: 3,
        image: null,
        charImage: 1,
        choices: ["2","3", "5",],
        correct: "3",
        explanation: null
    },

    {
        question: "キャンパスにあるさすまたの本数は？",
        difficulty: 4,
        image: null,
        charImage: 1,
        choices: ["0本", "1本", "2本"],
        correct: "1本",
        explanation: "入り口入って左側にあります"
    },

    {
        question: "朝のホームルーム(HR)が始まる時間は？",
        difficulty: 2,
        image: null,
        charImage: 2,
        choices: ["AM 9:00", "AM 9:30", "AM 10:00"],
        correct: "AM 9:30",
        explanation: "ちゃんと始める前に来てくださいね"
    },

    {
        question: "1コマあたりの授業時間は？",
        difficulty: 1,
        image: null,
        charImage: 2,
        choices: ["45分間", "50分間", "60分間"],
        correct: "50分間",
        explanation: "スクーリングでは授業時間が異なる場合があります。よく確認してください"
    },

    {
        question: "1限目が始まる時間は？",
        difficulty: 1,
        image: null,
        charImage: 4,
        choices: ["AM 9:45", "AM 10:00", "AM 10:15"],
        correct: "AM 9:45",
        explanation: "ホームルーム(HR)後すぐにはじまります"
    },

    {
        question: "終礼が終わる時間は？",
        difficulty: 2,
        image: null,
        charImage: 4,
        choices: ["PM 4:00", "PM 4:15", "PM 4:30"],
        correct: "PM 4:15",
        explanation: null
    },

    {
        question: "お昼休みの時間は何分間？",
        difficulty: 1,
        image: null,
        charImage: 1,
        choices: ["40分間", "50分間", "60分間"],
        correct: "40分間",
        explanation: "スクーリングではお昼休みの時間が異なる場合があります。よく確認してください"
    },

    {
        question: "キャンパスはビルの何階？",
        difficulty: 1,
        image: null,
        charImage: 1,
        choices: ["2階", "3階", "4階"],
        correct: "3階",
        explanation: "キャンパスによって異なります"
    },

    {
        question: "井上（彩）さん(TA)の好きな食べ物は？",
        difficulty: 3,
        image: null,
        charImage: 3,
        choices: ["タコス", "パスタ", "ピザ"],
        correct: "タコス",
        explanation: null
    },

    {
        question: "井上（彩）さん(TA)の趣味は？",
        difficulty: 3,
        image: null,
        charImage: 3,
        choices: ["料理", "映画", "旅行"],
        correct: "映画",
        explanation: null
    },

    {
        question: "篠塚さん(TA)の趣味は？",
        difficulty: 2,
        image: null,
        charImage: 4,
        choices: ["ゲーム", "ランニング", "ピアノ"],
        correct: "ゲーム",
        explanation: null
    },

    {
        question: "篠塚さん(TA)の好きな食べ物は？",
        difficulty: 3,
        image: null,
        charImage: 4,
        choices: ["家系ラーメン", "油そば", "とんこつラーメン"],
        correct: "家系ラーメン",
        explanation: null
    },

    {
        question: "池田さん(TA)の好きな食べ物は？",
        difficulty: 3,
        image: null,
        charImage: 2,
        choices: ["イタリアン", "エスニック料理", "和食"],
        correct: "エスニック料理",
        explanation: null
    },

    {
        question: "池田さん(TA)の趣味は",
        difficulty: 3,
        image: null,
        charImage: 2,
        choices: ["ゲーム", "キャンプ", "手芸"],
        correct: "ゲーム",
        explanation: null
    },

    {
        question: "桑原さん(TA)の趣味は？",
        difficulty: 3,
        image: null,
        charImage: 2,
        choices: ["PCゲーム", "テレビゲーム", "ボードゲーム"],
        correct: "PCゲーム",
        explanation: null
    },

    {
        question: "桑原さん(TA)の好きな食べ物は？",
        difficulty: 3,
        image: null,
        charImage: 2,
        choices: ["オムライス", "ハンバーガー", "カレーライス"],
        correct: "ハンバーガー",
        explanation: null
    },

    {
        question: "島澤さん(メンター)の趣味は？",
        difficulty: 4,
        image: null,
        charImage: 2,
        choices: ["サウナ", "温泉", "岩盤浴"],
        correct: "サウナ",
        explanation: null
    },

    {
        question: "島澤さん(メンター)の推しは？",
        difficulty: 4,
        image: null,
        charImage: 2,
        choices: ["大谷翔平", "藤井聡太", "八村塁"],
        correct: "大谷翔平",
        explanation: null
    },

    {
        question: "館野さん(メンター)の好きな食べ物は？",
        difficulty: 3,
        image: null,
        charImage: 2,
        choices: ["お好み焼き", "たこ焼き", "もんじゃ焼き"],
        correct: "たこ焼き",
        explanation: null
    },

    {
        question: "キャンフェスであった屋台は？①",
        difficulty: 3,
        image: null,
        charImage: 4,
        choices: ["お好み焼き", "もんじゃ焼き", "焼きそば", "たこ焼き"],
        correct: "焼きそば",
        explanation: null
    },

    {
        question: "キャンフェスであった屋台は？②",
        difficulty: 3,
        image: null,
        charImage: 4,
        choices: ["丸いもの焼き", "四角いもの焼き", "三角もの焼き"],
        correct: "丸いもの焼き",
        explanation: null
    },

    {
        question: "キャンフェスであった屋台は？③",
        difficulty: 3,
        image: null,
        charImage: 4,
        choices: ["りんご飴", "いちご飴", "わたあめ"],
        correct: "わたあめ",
        explanation: null
    },

    {
        question: "キャンフェスであった屋台は？④",
        difficulty: 3,
        image: null,
        charImage: 4,
        choices: ["アーチェリー", "射的", "吹き矢"],
        correct: "射的",
        explanation: null
    },

    {
        question: "キャンフェスの売り上げは？(2025年度)",
        difficulty: 5,
        image: null,
        charImage: 1,
        choices: ["約2万円", "約5万円", "約9万円"],
        correct: "約5万円",
        explanation: "売り上げはキャンパスの備品購入に役立てられています"
    },

    {
        question: "キャンフェスの来場者数は？(2025年度)",
        difficulty: 5,
        image: null,
        charImage: 2,
        choices: ["約80人", "約120人", "約160人"],
        correct: "約120人",
        explanation: null
    },

    {
        question: "キャンフェスの開催日は？(2025年度)",
        difficulty: 5,
        image: null,
        charImage: 3,
        choices: ["8月30日", "9月20日", "11月3日"],
        correct: "9月20日",
        explanation: null
    },

    {
        question: "校外学習はいつ行われた？(2025年度)",
        difficulty: 4,
        image: null,
        charImage: 4,
        choices: ["5月16日", "7月7日", "10月9日"],
        correct: "5月16日",
        explanation: "新年度を迎え、仲を深めるために実施されます"
    },

    {
        question: "校外学習はどこへ行った？",
        difficulty: 4,
        image: null,
        charImage: 4,
        choices: ["上野", "池袋", "渋谷"],
        correct: "渋谷",
        explanation: null
    },

    {
        question: "N高等学校は何年度に設立した？",
        difficulty: 1,
        image: null,
        charImage: 1,
        choices: ["2010年度", "2016年度", "2019年度"],
        correct: "2016年度",
        explanation: null
    },

    {
        question: "S高等学校は何年度に設立した？",
        difficulty: 2,
        image: null,
        charImage: 2,
        choices: ["2016年度", "2019年度", "2021年度"],
        correct: "2021年度",
        explanation: null
    },

    {
        question: "R高等学校は何年度に設立した？",
        difficulty: 3,
        image: null,
        charImage: 3,
        choices: ["2016年度", "2021年度", "2025年度"],
        correct: "2025年度",
        explanation: null
    },

    {
        question: "N高グループの全校生徒数は？(問題制作時点)",
        difficulty: 2,
        image: null,
        charImage: 5,
        choices: ["13207名", "34071名", "40731名"],
        correct: "34071名",
        explanation: null
    },

    {
        question: "N高グループ生の大学進学率は？",
        difficulty: 3,
        image: null,
        charImage: 4,
        choices: ["46%", "55%", "64%"],
        correct: "46%",
        explanation: null
    },

    {
        question: "Nグループ生の就職率は？",
        difficulty: 3,
        image: null,
        charImage: 1,
        choices: ["5%", "10%", "15%"],
        correct: "10%",
        explanation: null
    },

    {
        question: "N高グループ生の専門学校進学率は？",
        difficulty: 3,
        image: null,
        charImage: 2,
        choices: ["11%", "22%", "33%"],
        correct: "22%",
        explanation: null
    },

    {
        question: "S高の「S」に込められた意味として間違っているものは？",
        difficulty: 3,
        image: null,
        charImage: 3,
        choices: ["SHINE", "SPECIAL", "SHINJUKU","SUPER"],
        correct: "SHINJUKU",
        explanation: "SHINJUKU(新宿)はキャンパスがある以外S高とは特に関係がありません"
    },

    {
        question: "R高の「R」に込められた意味として間違っているものは？",
        difficulty: 3,
        image: null,
        charImage: 5,
        choices: ["REAL", "RESPECT", "RABBIT","RELATION","REVOLUTION"],
        correct: "RABBIT",
        explanation: "RABBIT(うさぎ)はR高とは特に関係がありません"
    },

    {
        question: "本校スクーリングは何年生の時にある？",
        difficulty: 1,
        image: null,
        charImage: 1,
        choices: ["1年生", "2年生", "3年生"],
        correct: "2年生",
        explanation: "N高は沖縄伊計本校、S高は茨城つくば本校、R高は群馬桐生本校に行きます"
    },

    {
        question: "N高生が行く本校はどの都道府県にある？",
        difficulty: 1,
        image: null,
        charImage: 2,
        choices: ["愛知県","茨城県","岡山県", "沖縄県","京都府", "群馬県","埼玉県","東京都","北海道"],
        correct: "沖縄県",
        explanation: "N高は沖縄伊計本校、S高は茨城つくば本校、R高は群馬桐生本校に行きます"
    },

    {
        question: "S高生が行く本校はどの都道府県にある？",
        difficulty: 1,
        image: null,
        charImage: 3,
        choices: ["愛知県","茨城県","岡山県", "沖縄県","京都府", "群馬県","埼玉県","東京都","北海道"],
        correct: "茨城県",
        explanation: "N高は沖縄伊計本校、S高は茨城つくば本校、R高は群馬桐生本校に行きます"
    },

    {
        question: "R高生が行く本校はどの都道府県にある？",
        difficulty: 1,
        image: null,
        charImage: 5,
        choices: ["愛知県","茨城県","岡山県", "沖縄県","京都府", "群馬県","埼玉県","東京都","北海道"],
        correct: "群馬県",
        explanation: "N高は沖縄伊計本校、S高は茨城つくば本校、R高は群馬桐生本校に行きます"
    },

    {
        question: "N高本校スクーリングで制作者が作ったお菓子の名前は",
        difficulty: 2,
        image: null,
        charImage: 4,
        choices: ["アガーサー", "アガラサー", "アサガラー"],
        correct: "アガラサー",
        explanation: "“アガラサー”とは「蒸す」「蒸し器」という意味で、沖縄では蒸しカステラや蒸しパンのようなお菓子のことを「アガラサー（地域によっては「ジーカシティラ」）」と言います。具志堅商店"
    },

    {
        question: "N高本校スクーリングで行く伊計島1つしかないものは？",
        difficulty: 2,
        image: null,
        charImage: 4,
        choices: ["ビーチ", "民家", "売店"],
        correct: "売店",
        explanation: "ほぼスーパー見たいな品揃えでした！(体験談)"
    },

    {
        question: "N高本校スクーリングでやるアクティビティは？",
        difficulty: 2,
        image: null,
        charImage: 2,
        choices: ["スイカ割り", "サトウキビ収穫体験", "ボート漕ぎ"],
        correct: "ボート漕ぎ",
        explanation: null
    },

    {
        question: "N高本校スクーリングでは、1部屋に何人で泊まることが多い？",
        difficulty: 2,
        image: null,
        charImage: 2,
        choices: ["2人", "4人", "6人"],
        correct: "4人",
        explanation: null
    },

    {
        question: "S高本校スクーリングで作るお菓子は？",
        difficulty: 2,
        image: null,
        charImage: 2,
        choices: ["ラズベリーマフィン", "ストロベリーマフィン", "ブルーベリーマフィン"],
        correct: "ブルーベリーマフィン",
        explanation: null
    },

    {
        question: "S高本校スクーリングでやるアクティビティは？",
        difficulty: 2,
        image: null,
        charImage: 2,
        choices: ["そば打ち体験", "マフラー編み", "ハンカチ染色体験"],
        correct: "ハンカチ染色体験",
        explanation: null
    },

    {
        question: "S高本校スクーリングではどこの博物館に行く？",
        difficulty: 2,
        image: null,
        charImage: 4,
        choices: ["納豆博物館", "宇宙博物館", "レンコン博物館"],
        correct: "宇宙博物館",
        explanation: null
    },

    {
        question: "S高本校スクーリングでは、1部屋に何人で泊まることが多い？",
        difficulty: 2,
        image: null,
        charImage: 3,
        choices: ["4", "6", "10"],
        correct: "10",
        explanation: null
    },

    {
        question: "磁石際に出演したことのあるゲストは？①",
        difficulty: 1,
        image: null,
        charImage: 3,
        choices: ["ひろゆき", "ゆきひろ", "ひゆきろ"],
        correct: "ひろゆき",
        explanation: null
    },

    {
        question: "磁石際に出演したことのあるゲストは？②",
        difficulty: 1,
        image: null,
        charImage: 3,
        choices: ["ゆうちゃま＆ゆいちゃま", "ゆうちゃん＆ゆいちゃん", "ゆうちゃみ＆ゆいちゃみ"],
        correct: "ゆうちゃみ＆ゆいちゃみ",
        explanation: null
    },

    {
        question: "磁石際の開催場所は？",
        difficulty: 3,
        image: null,
        charImage: 4,
        choices: ["東京ビックサイト", "幕張メッセ", "国際展示場"],
        correct: "幕張メッセ",
        explanation: "ニコニコ超会議のブースの一つとして開催されます"
    },

    {
        question: "川口駅前キャンパスで1番大きい大きい部屋の授業や朝礼で使われる机の数は？(2025年度)",
        difficulty: 4,
        image: null,
        charImage: 5,
        choices: ["54", "72", "96"],
        correct: "72",
        explanation: null
    },

    {
        question: "川口駅前キャンパスにあるテレビの台数は？",
        difficulty: 4,
        image: null,
        charImage: 5,
        choices: ["3台", "4台", "5台"],
        correct: "5台",
        explanation: null
    },

    {
        question: "キャンフェスの売上金で買ったものは？",
        difficulty: 3,
        image: null,
        charImage: 1,
        choices: ["Nintendo Switch", "卓球台", "カラオケ"],
        correct: "卓球台",
        explanation: null
    },

    {
        question: "このクイズは、この問題以外に何問ある？",
        difficulty: 5,
        image: null,
        charImage: 2,
        choices: ["69問", "70問", "71問"],
        correct: "71問",
        explanation: "いっぱい挑戦して全部の問題を見てみてください"
    },
,

    /* ▲▲▲ 2問目以降は、下の「テンプレート」をコピーして上に貼り付けてね ▲▲▲ */


    /* === コピー用テンプレート（ここから下をコピー） ===
    ,
    {
        question: "問題文",
        difficulty: 1,
        image: null,
        choices: ["A", "B", "C"],
        correct: "A",
        explanation: "解説"
    }
    === コピー用テンプレート（ここまで） === */


    /* ==================================================
      ▼ 過去のサンプル問題（今は無効化されています）▼
      
      復活させたい時は、前後の「スラッシュと星」を消してください。
    ==================================================

    ,
    {
        question: "【難易度1】信号の「進め」は何色？",
        difficulty: 1, 
        image: null,
        choices: ["青", "黄", "赤"], 
        correct: "青",
        explanation: "国際的には緑色（Green）です。"
    },
    {
        question: "【難易度2】1, 2, 3 の次は？",
        difficulty: 2,
        image: null,
        choices: ["3", "4", "5"], 
        correct: "4",
        explanation: "数字の順番の問題です。"
    }

    ================================================== */
];