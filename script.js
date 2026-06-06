// ─── レッスンデータ ─────────────────────────────────────────

const lessons = {
  hiragana: {
    label: "ひらがな",
    quizLead: "からはじまることばはどれ？",
    theme: "mint",
    items: [
      { visual: "あ", title: "あひる",      description: "「あ」は、あひるの「あ」。口を大きくあけて読んでみよう。" },
      { visual: "い", title: "いちご",      description: "「い」は、いちごの「い」。細くにっこりした口で読めるよ。" },
      { visual: "う", title: "うみ",        description: "「う」は、うみの「う」。くちを丸くして声を出そう。" },
      { visual: "え", title: "えんぴつ",    description: "「え」は、えんぴつの「え」。書く道具の名前も覚えよう。" },
      { visual: "お", title: "おにぎり",    description: "「お」は、おにぎりの「お」。ごはんの形を思い出してね。" },
      { visual: "か", title: "かさ",        description: "「か」は、かさの「か」。雨の日に使うものだね。" },
      { visual: "き", title: "きって",      description: "「き」は、きっての「き」。手紙を送るときに封筒に貼るよ。" },
      { visual: "く", title: "くも",        description: "「く」は、くもの「く」。空に浮かぶ白いふわふわだよ。" },
      { visual: "け", title: "けむし",      description: "「け」は、けむしの「け」。もふもふの毛がある虫だよ。" },
      { visual: "こ", title: "こいのぼり",  description: "「こ」は、こいのぼりの「こ」。5月5日にかざるこどもの節句だよ。" },
      { visual: "さ", title: "さくら",      description: "「さ」は、さくらの「さ」。春に咲くピンクの花だよ。" },
      { visual: "し", title: "しろ",        description: "「し」は、しろの「し」。お城のことで、大きくて立派な建物だよ。" },
      { visual: "す", title: "すいか",      description: "「す」は、すいかの「す」。夏においしい大きな果物だよ。" },
      { visual: "せ", title: "せんせい",    description: "「せ」は、せんせいの「せ」。学校で勉強を教えてくれる人だよ。" },
      { visual: "そ", title: "そら",        description: "「そ」は、そらの「そ」。晴れた日は青く広がっているよ。" },
      { visual: "た", title: "たいよう",    description: "「た」は、たいようの「た」。朝に空を見て探してみよう。" },
      { visual: "ち", title: "ちきゅう",    description: "「ち」は、ちきゅうの「ち」。わたしたちが住んでいる星だよ。" },
      { visual: "つ", title: "つき",        description: "「つ」は、つきの「つ」。夜空に光る丸い天体だよ。" },
      { visual: "て", title: "てぶくろ",    description: "「て」は、てぶくろの「て」。冬に手を温めるものだよ。" },
      { visual: "と", title: "とけい",      description: "「と」は、とけいの「と」。時間を知らせてくれる道具だよ。" },
      { visual: "な", title: "なす",        description: "「な」は、なすの「な」。紫色のつやつやした野菜だよ。" },
      { visual: "に", title: "にじ",        description: "「に」は、にじの「に」。雨上がりに空にかかる七色の橋だよ。" },
      { visual: "ぬ", title: "ぬいぐるみ",  description: "「ぬ」は、ぬいぐるみの「ぬ」。抱っこして寝るのが気持ちいいね。" },
      { visual: "ね", title: "ねこ",        description: "「ね」は、ねこの「ね」。「にゃあ」と鳴く人気のペットだよ。" },
      { visual: "の", title: "のり",        description: "「の」は、のりの「の」。紙をくっつけるときに使うよ。" },
      { visual: "は", title: "はな",        description: "「は」は、はなの「は」。色とりどりの美しい植物だよ。" },
      { visual: "ひ", title: "ひまわり",    description: "「ひ」は、ひまわりの「ひ」。太陽のほうを向いて咲く大きな花だよ。" },
      { visual: "ふ", title: "ふね",        description: "「ふ」は、ふねの「ふ」。海や川を走る乗り物だよ。" },
      { visual: "へ", title: "へび",        description: "「へ」は、へびの「へ」。にょろにょろと動く細長い生き物だよ。" },
      { visual: "ほ", title: "ほし",        description: "「ほ」は、ほしの「ほ」。夜空にキラキラ輝いているよ。" },
      { visual: "ま", title: "まつり",      description: "「ま」は、まつりの「ま」。神社や街で行われる賑やかなお祭りだよ。" },
      { visual: "み", title: "みかん",      description: "「み」は、みかんの「み」。冬においしい甘酸っぱい果物だよ。" },
      { visual: "む", title: "むしめがね",  description: "「む」は、むしめがねの「む」。小さいものを大きく見せる道具だよ。" },
      { visual: "め", title: "めだか",      description: "「め」は、めだかの「め」。田んぼや川にいる小さな魚だよ。" },
      { visual: "も", title: "もも",        description: "「も」は、ももの「も」。ふわふわの皮の甘い果物だよ。" },
      { visual: "や", title: "やま",        description: "「や」は、やまの「や」。高くそびえる大きな岩と土の地形だよ。" },
      { visual: "ゆ", title: "ゆき",        description: "「ゆ」は、ゆきの「ゆ」。冬に空から降る白くふわふわしたものだよ。" },
      { visual: "よ", title: "よる",        description: "「よ」は、よるの「よ」。日が沈んで暗くなる時間だよ。" },
      { visual: "ら", title: "らっぱ",      description: "「ら」は、らっぱの「ら」。ぷっぷーと吹く金色の楽器だよ。" },
      { visual: "り", title: "りんご",      description: "「り」は、りんごの「り」。赤くて丸い甘い果物だよ。" },
      { visual: "る", title: "るすばん",    description: "「る」は、るすばんの「る」。おうちで待っていることだよ。" },
      { visual: "れ", title: "れいぞうこ",  description: "「れ」は、れいぞうこの「れ」。食べ物を冷たく保存するものだよ。" },
      { visual: "ろ", title: "ろうそく",    description: "「ろ」は、ろうそくの「ろ」。火をつけると明るく燃えるよ。" },
      { visual: "わ", title: "わに",        description: "「わ」は、わにの「わ」。大きな口が特徴の爬虫類だよ。" },
      { visual: "を", title: "を", quizExclude: true, description: "「を」は、「てをあらう」「ほんをよむ」のようにことばをつなぐときに使うよ。" },
      { visual: "ん", title: "ん", quizExclude: true, description: "「ん」は、「らいおん」「でんしゃ」など言葉の中や最後に出てくる特別な文字だよ。" }
    ]
  },
  katakana: {
    label: "カタカナ",
    quizLead: "のことばはどれ？",
    theme: "sky",
    items: [
      { visual: "ア", title: "アイス",        description: "「ア」は、アイスの「ア」。カタカナは外から来た言葉によく使うよ。" },
      { visual: "イ", title: "イルカ",        description: "「イ」は、イルカの「イ」。海にいるかしこい動物だね。" },
      { visual: "ウ", title: "ウサギ",        description: "「ウ」は、ウサギの「ウ」。長い耳が目印の動物だよ。" },
      { visual: "エ", title: "エプロン",      description: "「エ」は、エプロンの「エ」。料理や工作で服を守るよ。" },
      { visual: "オ", title: "オムレツ",      description: "「オ」は、オムレツの「オ」。たまごで作るふわふわ料理だよ。" },
      { visual: "カ", title: "カメラ",        description: "「カ」は、カメラの「カ」。写真を撮る道具だよ。" },
      { visual: "キ", title: "キリン",        description: "「キ」は、キリンの「キ」。首がとても長い動物だよ。" },
      { visual: "ク", title: "クッキー",      description: "「ク」は、クッキーの「ク」。焼いて作るサクサクのおかしだよ。" },
      { visual: "ケ", title: "ケーキ",        description: "「ケ」は、ケーキの「ケ」。誕生日などに食べる甘いおかしだよ。" },
      { visual: "コ", title: "コアラ",        description: "「コ」は、コアラの「コ」。木の上でよく眠るオーストラリアの動物だよ。" },
      { visual: "サ", title: "サンドイッチ",  description: "「サ」は、サンドイッチの「サ」。パンにはさんだ食べ物だね。" },
      { visual: "シ", title: "シール",        description: "「シ」は、シールの「シ」。裏がくっつく小さな紙だよ。" },
      { visual: "ス", title: "スプーン",      description: "「ス」は、スプーンの「ス」。スープやアイスをすくう道具だよ。" },
      { visual: "セ", title: "セーター",      description: "「セ」は、セーターの「セ」。冬に着る暖かいニットの服だよ。" },
      { visual: "ソ", title: "ソファ",        description: "「ソ」は、ソファの「ソ」。ふかふかに座れるリビングのいすだよ。" },
      { visual: "タ", title: "タオル",        description: "「タ」は、タオルの「タ」。手や体をふくものだよ。" },
      { visual: "チ", title: "チーズ",        description: "「チ」は、チーズの「チ」。牛乳から作る濃厚な食べ物だよ。" },
      { visual: "ツ", title: "ツリー",        description: "「ツ」は、ツリーの「ツ」。クリスマスに飾る木のことだよ。" },
      { visual: "テ", title: "テレビ",        description: "「テ」は、テレビの「テ」。映像や音が出る家電だよ。" },
      { visual: "ト", title: "トマト",        description: "「ト」は、トマトの「ト」。赤くて丸い野菜だよ。" },
      { visual: "ナ", title: "ナイフ",        description: "「ナ」は、ナイフの「ナ」。食べ物を切る道具だよ。使うときは気をつけよう。" },
      { visual: "ニ", title: "ニンジン",      description: "「ニ」は、ニンジンの「ニ」。オレンジ色の甘い野菜だよ。" },
      { visual: "ヌ", title: "ヌードル",      description: "「ヌ」は、ヌードルの「ヌ」。麺のことで、ラーメンもヌードルだよ。" },
      { visual: "ネ", title: "ネクタイ",      description: "「ネ」は、ネクタイの「ネ」。おとなが首に巻くおしゃれなものだよ。" },
      { visual: "ノ", title: "ノート",        description: "「ノ」は、ノートの「ノ」。字を書いたり絵を描いたりする冊子だよ。" },
      { visual: "ハ", title: "ハンバーガー",  description: "「ハ」は、ハンバーガーの「ハ」。パンにお肉をはさんだ食べ物だよ。" },
      { visual: "ヒ", title: "ヒーロー",      description: "「ヒ」は、ヒーローの「ヒ」。困っている人を助ける強い人のことだよ。" },
      { visual: "フ", title: "フォーク",      description: "「フ」は、フォークの「フ」。食べ物を刺して食べる道具だよ。" },
      { visual: "ヘ", title: "ヘリコプター",  description: "「ヘ」は、ヘリコプターの「ヘ」。プロペラで空を飛ぶ乗り物だよ。" },
      { visual: "ホ", title: "ホットケーキ",  description: "「ホ」は、ホットケーキの「ホ」。ふわふわ焼いてシロップをかけて食べるよ。" },
      { visual: "マ", title: "マヨネーズ",    description: "「マ」は、マヨネーズの「マ」。料理にかける白いクリーミーなソースだよ。" },
      { visual: "ミ", title: "ミルク",        description: "「ミ」は、ミルクの「ミ」。牛から取れる白い飲み物だよ。" },
      { visual: "ム", title: "ムービー",      description: "「ム」は、ムービーの「ム」。動く映像のことで、映画のことだよ。" },
      { visual: "メ", title: "メロン",        description: "「メ」は、メロンの「メ」。緑や黄色の網模様がある甘い果物だよ。" },
      { visual: "モ", title: "モンキー",      description: "「モ」は、モンキーの「モ」。木の上でくらすさるのことだよ。" },
      { visual: "ヤ", title: "ヤシ",          description: "「ヤ」は、ヤシの「ヤ」。南の島に生えている背の高い木だよ。" },
      { visual: "ユ", title: "ユニコーン",    description: "「ユ」は、ユニコーンの「ユ」。額に角を持つ幻想的な白い馬だよ。" },
      { visual: "ヨ", title: "ヨーグルト",    description: "「ヨ」は、ヨーグルトの「ヨ」。牛乳を発酵させた酸っぱい食べ物だよ。" },
      { visual: "ラ", title: "ライオン",      description: "「ラ」は、ライオンの「ラ」。百獣の王と呼ばれる大きなネコ科の動物だよ。" },
      { visual: "リ", title: "リボン",        description: "「リ」は、リボンの「リ」。プレゼントや髪の毛を飾るかわいいリボンだよ。" },
      { visual: "ル", title: "ルビー",        description: "「ル」は、ルビーの「ル」。深い赤色のきれいな宝石だよ。" },
      { visual: "レ", title: "レモン",        description: "「レ」は、レモンの「レ」。黄色くて酸っぱい果物だよ。" },
      { visual: "ロ", title: "ロボット",      description: "「ロ」は、ロボットの「ロ」。機械でできた動く人形のことだよ。" },
      { visual: "ワ", title: "ワニ",          description: "「ワ」は、ワニの「ワ」。大きな口と鋭い歯を持つ爬虫類だよ。" },
      { visual: "ヲ", title: "ヲ", quizExclude: true, description: "「ヲ」は、カタカナの特別な文字。ふだんはあまり使わないけど、五十音の一つだよ。" },
      { visual: "ン", title: "ン", quizExclude: true, description: "「ン」は、「ライオン」「パン」のように言葉の中や最後に出てくる特別な文字だよ。" }
    ]
  },
  animals: {
    label: "どうぶつ",
    quizLead: "はどのどうぶつ？",
    theme: "leaf",
    items: [
      { visual: "🐱", title: "ねこ",     description: "小さな肉食の動物。ひげとしっぽで気持ちを表すことがあるよ。" },
      { visual: "🐶", title: "いぬ",     description: "人と長く暮らしてきた動物。においをかぐのがとても得意だよ。" },
      { visual: "🐼", title: "ぱんだ",   description: "白と黒の大きな動物。中国の竹林にすんでいるよ。" },
      { visual: "🐨", title: "こあら",   description: "オーストラリアにすむ動物。ユーカリの葉が大好きだよ。" },
      { visual: "🦁", title: "らいおん", description: "大きなネコの仲間。オスには立派なたてがみがあるよ。" },
      { visual: "🐯", title: "とら",     description: "縞模様が美しい大型のネコ科の動物。ジャングルにすんでいるよ。" },
      { visual: "🦊", title: "きつね",   description: "赤茶色の毛とふさふさのしっぽが特徴。かしこい動物だよ。" },
      { visual: "🐻", title: "くま",     description: "大きくて力強い動物。冬になると穴の中で眠るよ。" },
      { visual: "🐘", title: "ぞう",     description: "陸で一番大きな動物。長い鼻で水や食べ物をつかむよ。" },
      { visual: "🦒", title: "きりん",   description: "とても長い首で、高い木の葉を食べる草食動物だよ。" },
      { visual: "🦓", title: "しまうま", description: "白と黒の縞模様が目印。アフリカのサバンナにすんでいるよ。" },
      { visual: "🐧", title: "ぺんぎん", description: "鳥の仲間だけれど、空を飛ばずに泳ぐのが上手だよ。" },
      { visual: "🐬", title: "いるか",   description: "海にすむかしこい動物。人とも仲良くなれるよ。" },
      { visual: "🐸", title: "かえる",   description: "水辺にすむ生き物。たまごからおたまじゃくしになるよ。" },
      { visual: "🐢", title: "かめ",     description: "かたい甲羅を持つ生き物。とても長生きすることで有名だよ。" },
      { visual: "🦋", title: "ちょう",   description: "羽の模様が美しい虫。花のみつを吸うことが多いよ。" }
    ]
  },
  clock: {
    label: "とけい",
    quizLead: "は何時？",
    theme: "sun",
    items: [
      { visual: "1:00",  title: "1時",   description: "短い針が1、長い針が12を指すと「1時」だよ。" },
      { visual: "2:00",  title: "2時",   description: "短い針が2、長い針が12を指すと「2時」だよ。" },
      { visual: "3:00",  title: "3時",   description: "短い針が3、長い針が12を指すと「3時」。おやつの時間でよく聞くね。" },
      { visual: "4:00",  title: "4時",   description: "短い針が4、長い針が12を指すと「4時」だよ。" },
      { visual: "5:00",  title: "5時",   description: "短い針が5、長い針が12を指すと「5時」だよ。" },
      { visual: "6:00",  title: "6時",   description: "短い針が6、長い針が12を指すと「6時」だよ。" },
      { visual: "7:00",  title: "7時",   description: "短い針が7、長い針が12を指すと「7時」だよ。" },
      { visual: "8:00",  title: "8時",   description: "短い針が8、長い針が12を指すと「8時」だよ。" },
      { visual: "9:00",  title: "9時",   description: "短い針が9、長い針が12を指すと「9時」だよ。" },
      { visual: "10:00", title: "10時",  description: "短い針が10、長い針が12を指すと「10時」だよ。" },
      { visual: "11:00", title: "11時",  description: "短い針が11、長い針が12を指すと「11時」だよ。" },
      { visual: "12:00", title: "12時",  description: "短い針も長い針も12を指すと「12時」。お昼ごはんの時間だね。" },
      { visual: "1:30",  title: "1時半", description: "短い針が1と2の間、長い針が6を指すと「1時半」だよ。" },
      { visual: "2:30",  title: "2時半", description: "短い針が2と3の間、長い針が6を指すと「2時半」だよ。" },
      { visual: "3:30",  title: "3時半", description: "短い針が3と4の間、長い針が6を指すと「3時半」だよ。" },
      { visual: "6:30",  title: "6時半", description: "短い針が6と7の間、長い針が6を指すと「6時半」。朝ごはん前かな。" }
    ]
  },
  knowledge: {
    label: "ものしり",
    quizLead: "に合うものはどれ？",
    theme: "berry",
    items: [
      { visual: "🌞", title: "朝",      description: "一日が始まる時間。起きたら顔を洗って朝ごはんを食べよう。" },
      { visual: "🚦", title: "信号",    description: "青は進む、赤は止まる。道路では必ずよく見よう。" },
      { visual: "🧼", title: "手洗い",  description: "外から帰ったら手を洗う。病気を防ぐ大事な習慣だよ。" },
      { visual: "📚", title: "図書館",  description: "本を読んだり借りたりできる場所。静かに過ごそう。" },
      { visual: "🦷", title: "歯みがき",description: "食べたあとに歯をみがくと、虫歯を防ぎやすくなるよ。" },
      { visual: "🌧️", title: "雨",      description: "雲から水が落ちてくる天気。植物や川にも大切な水だよ。" },
      { visual: "🚌", title: "バス",    description: "たくさんの人を乗せて走る乗り物。順番を守って乗ろう。" },
      { visual: "🧭", title: "方角",    description: "東西南北のこと。太陽は朝に東からのぼるよ。" },
      { visual: "🚑", title: "救急車",  description: "けがや病気の人を病院へ運ぶ特別な乗り物。サイレンが聞こえたら道をあけよう。" },
      { visual: "🎒", title: "ランドセル", description: "小学生が使う四角いかばん。教科書や道具を入れて背負うよ。" },
      { visual: "✂️", title: "はさみ",  description: "紙や布を切る道具。正しく持って、刃に気をつけて使おう。" },
      { visual: "🗺️", title: "地図",    description: "場所を上から見たように描いた図。どこに何があるか分かるよ。" },
      { visual: "🚃", title: "電車",    description: "線路の上を走る乗り物。たくさんの人を速く運ぶことができるよ。" },
      { visual: "🌳", title: "公園",    description: "みんなが遊べる広い場所。滑り台やブランコがあることが多いよ。" },
      { visual: "💨", title: "風",      description: "空気が動いて起こる自然の力。木の葉や雲を動かすよ。" },
      { visual: "🍱", title: "給食",    description: "学校でみんなが食べるお昼ごはん。栄養バランスを考えて作られているよ。" }
    ]
  }
};

// ─── クリア進捗 ────────────────────────────────────────────

function loadCleared() {
  try {
    const saved = JSON.parse(localStorage.getItem("kidsStudyCleared") || "{}");
    const result = {};
    Object.keys(lessons).forEach((key) => {
      result[key] = new Set(saved[key] || []);
    });
    return result;
  } catch {
    const result = {};
    Object.keys(lessons).forEach((key) => { result[key] = new Set(); });
    return result;
  }
}

function saveCleared() {
  const toSave = {};
  Object.entries(state.cleared).forEach(([k, v]) => { toSave[k] = [...v]; });
  localStorage.setItem("kidsStudyCleared", JSON.stringify(toSave));
}

// ─── 状態 ──────────────────────────────────────────────────

const state = {
  category: "hiragana",
  selectedIndex: 0,
  stars: Number(localStorage.getItem("kidsStudyStars") || 0),
  currentQuiz: null,
  cleared: loadCleared()
};

// ─── DOM 参照 ──────────────────────────────────────────────

const cardGrid        = document.querySelector("#cardGrid");
const focusVisual     = document.querySelector("#focusVisual");
const focusKind       = document.querySelector("#focusKind");
const focusTitle      = document.querySelector("#focusTitle");
const focusDescription = document.querySelector("#focusDescription");
const starCount       = document.querySelector("#starCount");
const quizQuestion    = document.querySelector("#quizQuestion");
const quizOptions     = document.querySelector("#quizOptions");
const quizResult      = document.querySelector("#quizResult");

// ─── ユーティリティ ─────────────────────────────────────────

function currentLesson() {
  return lessons[state.category];
}

function parseClockTime(title) {
  if (title.includes("半")) {
    return { hour: Number(title.replace("時半", "")), minutes: 30 };
  }
  return { hour: Number(title.replace("時", "")), minutes: 0 };
}

function createClockFace(hour, size = "large", minutes = 0) {
  const clock = document.createElement("div");
  clock.className = `clock-face ${size === "small" ? "clock-face-small" : ""}`;
  clock.setAttribute("aria-label", `${hour}時${minutes > 0 ? minutes + "分" : ""}の時計`);

  for (let n = 1; n <= 12; n++) {
    const label = document.createElement("span");
    label.className = "clock-number";
    label.textContent = n;
    const angle = (n * 30 - 90) * (Math.PI / 180);
    label.style.setProperty("--x", `${50 + Math.cos(angle) * 38}%`);
    label.style.setProperty("--y", `${50 + Math.sin(angle) * 38}%`);
    clock.appendChild(label);
  }

  const hourHand = document.createElement("span");
  hourHand.className = "clock-hand clock-hour-hand";
  hourHand.style.setProperty("--hand-angle", `${hour * 30 + minutes * 0.5}deg`);

  const minuteHand = document.createElement("span");
  minuteHand.className = "clock-hand clock-minute-hand";
  minuteHand.style.setProperty("--hand-angle", `${minutes * 6}deg`);

  const center = document.createElement("span");
  center.className = "clock-center";

  clock.append(hourHand, minuteHand, center);
  return clock;
}

function setCategoryTheme() {
  document.body.dataset.theme = currentLesson().theme;
}

function updateStars(amount = 1) {
  state.stars += amount;
  localStorage.setItem("kidsStudyStars", String(state.stars));
  starCount.textContent = state.stars;
  document.querySelector(".progress-panel").classList.add("is-celebrating");
  setTimeout(() => document.querySelector(".progress-panel").classList.remove("is-celebrating"), 360);
}

function renderVisual(target, item, size = "large", category = state.category) {
  target.textContent = "";
  if (category === "clock") {
    const { hour, minutes } = parseClockTime(item.title);
    target.appendChild(createClockFace(hour, size, minutes));
    return;
  }
  const visual = document.createElement("span");
  visual.textContent = item.visual;
  target.appendChild(visual);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

// ─── 学習カード ─────────────────────────────────────────────

function renderFocus() {
  const lesson = currentLesson();
  const item = lesson.items[state.selectedIndex];
  const isCleared = state.cleared[state.category].has(item.title);

  renderVisual(focusVisual, item);
  focusKind.textContent = lesson.label;
  focusTitle.textContent = item.title;
  focusDescription.textContent = item.description;

  const btn = document.querySelector("#masterButton");
  btn.textContent = isCleared ? "✓ おぼえた！" : "できた！";
  btn.classList.toggle("is-cleared", isCleared);

  document.querySelectorAll(".learning-card").forEach((card, index) => {
    card.classList.toggle("is-selected", index === state.selectedIndex);
  });
}

function renderCards() {
  const lesson = currentLesson();
  cardGrid.innerHTML = "";

  lesson.items.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "learning-card";
    button.type = "button";
    button.setAttribute("aria-label", `${item.title}を学ぶ`);
    if (state.cleared[state.category].has(item.title)) {
      button.classList.add("is-cleared");
    }

    const visual = document.createElement("span");
    visual.className = "learning-visual";
    renderVisual(visual, item, "small");

    const title = document.createElement("strong");
    title.textContent = item.title;

    // クリアバッジ
    const badge = document.createElement("span");
    badge.className = "cleared-badge";
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = "✓";

    button.append(visual, title, badge);
    button.addEventListener("click", () => {
      state.selectedIndex = index;
      renderFocus();
    });
    cardGrid.appendChild(button);
  });

  renderFocus();
}

// ─── クイズ ────────────────────────────────────────────────

function makeQuiz() {
  const lesson = currentLesson();
  const quizableItems = lesson.items.filter(item => !item.quizExclude);
  const answer = quizableItems[Math.floor(Math.random() * quizableItems.length)];
  const wrongItems = shuffle(quizableItems.filter((item) => item.title !== answer.title)).slice(0, 2);
  const options = shuffle([answer, ...wrongItems]);

  // どうぶつのとき: 50%でビジュアルクイズ（名前を見て絵文字を選ぶ）
  const isVisualAnimal = state.category === "animals" && Math.random() < 0.5;
  state.currentQuiz = answer;
  state.isVisualAnimal = isVisualAnimal;
  quizResult.textContent = "";
  quizOptions.innerHTML = "";
  quizOptions.classList.toggle("quiz-options-visual", isVisualAnimal);

  if (state.category === "clock") {
    quizQuestion.textContent = "今何時？";
    const { hour, minutes } = parseClockTime(answer.title);
    const clockQuestion = createClockFace(hour, "large", minutes);
    clockQuestion.classList.add("quiz-clock");
    quizOptions.appendChild(clockQuestion);
  } else if (isVisualAnimal) {
    quizQuestion.textContent = `「${answer.title}」はどれ？`;
  } else {
    quizQuestion.textContent = `${answer.visual} ${lesson.quizLead}`;
  }

  options.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("data-title", item.title);

    if (state.category === "clock") {
      button.className = "quiz-option quiz-option-clock";
      button.textContent = item.title;
    } else if (isVisualAnimal) {
      button.className = "quiz-option quiz-option-visual";
      button.innerHTML = `<span>${item.visual}</span>`;
    } else {
      button.className = "quiz-option";
      button.innerHTML = `<span>${item.visual}</span>${item.title}`;
    }
    button.addEventListener("click", () => answerQuiz(button, item.title === answer.title));
    quizOptions.appendChild(button);
  });
}

function answerQuiz(button, isCorrect) {
  document.querySelectorAll(".quiz-option").forEach((o) => { o.disabled = true; });

  if (isCorrect) {
    button.classList.add("is-correct");
    quizResult.textContent = state.isVisualAnimal
      ? `せいかい！${state.currentQuiz.visual} ${state.currentQuiz.title} だよ！スターを1つもらったよ。`
      : "せいかい！スターを1つもらったよ。";
    updateStars(1);
    return;
  }

  button.classList.add("is-wrong");
  quizResult.textContent = `もう一回見てみよう。正解は「${state.currentQuiz.visual} ${state.currentQuiz.title}」だよ。`;
  document.querySelectorAll(".quiz-option").forEach((o) => {
    if (o.dataset.title === state.currentQuiz.title) {
      o.classList.add("is-correct");
    }
  });
}

// ─── チェック表 ─────────────────────────────────────────────

const CATEGORY_ORDER = ["hiragana", "katakana", "animals", "clock", "knowledge"];

function renderProgressSection() {
  const container = document.querySelector("#progressCategories");
  if (!container) return;
  container.innerHTML = "";

  CATEGORY_ORDER.forEach((catKey) => {
    const lesson = lessons[catKey];
    const cleared = state.cleared[catKey];
    const total = lesson.items.length;
    const done = cleared.size;

    const wrap = document.createElement("div");
    wrap.className = "prog-category";

    // ヘッダー
    const header = document.createElement("div");
    header.className = "prog-category-header";
    header.innerHTML = `
      <span class="prog-label">${lesson.label}</span>
      <span class="prog-count ${done === total ? "is-complete" : ""}">${done} / ${total}</span>
    `;
    wrap.appendChild(header);

    // 進捗バー
    const barWrap = document.createElement("div");
    barWrap.className = "prog-bar-wrap";
    const bar = document.createElement("div");
    bar.className = "prog-bar";
    bar.style.width = `${total > 0 ? (done / total) * 100 : 0}%`;
    barWrap.appendChild(bar);
    wrap.appendChild(barWrap);

    // アイテムグリッド
    const grid = document.createElement("div");
    grid.className = "prog-items";

    lesson.items.forEach((item) => {
      const isCleared = cleared.has(item.title);
      const btn = document.createElement("button");
      btn.className = `prog-item${isCleared ? " is-cleared" : ""}`;
      btn.type = "button";
      btn.setAttribute("aria-label", `${item.title}${isCleared ? "（おぼえた）" : "（まだ）"} タップで切り替え`);
      btn.setAttribute("aria-pressed", String(isCleared));

      const visual = document.createElement("span");
      visual.className = "prog-item-visual";

      if (catKey === "clock") {
        const { hour, minutes } = parseClockTime(item.title);
        visual.appendChild(createClockFace(hour, "small", minutes));
      } else {
        visual.textContent = item.visual;
      }

      const label = document.createElement("span");
      label.className = "prog-item-label";
      label.textContent = item.title;

      const check = document.createElement("span");
      check.className = "prog-item-check";
      check.setAttribute("aria-hidden", "true");
      check.textContent = "✓";

      btn.append(visual, label, check);
      btn.addEventListener("click", () => {
        if (cleared.has(item.title)) {
          cleared.delete(item.title);
        } else {
          cleared.add(item.title);
          updateStars(1);
        }
        saveCleared();
        renderProgressSection();
        // 学習カード側も更新
        if (state.category === catKey) renderCards();
      });
      grid.appendChild(btn);
    });

    wrap.appendChild(grid);
    container.appendChild(wrap);
  });
}

// ─── タブ ──────────────────────────────────────────────────

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    state.category = tab.dataset.category;
    state.selectedIndex = 0;
    setCategoryTheme();
    renderCards();
    makeQuiz();
  });
});

// ─── ジャンプボタン ─────────────────────────────────────────

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(`#${button.dataset.jump}`).scrollIntoView({ behavior: "smooth" });
  });
});

// ─── できた！ボタン ─────────────────────────────────────────

document.querySelector("#masterButton").addEventListener("click", () => {
  const item = currentLesson().items[state.selectedIndex];
  const alreadyCleared = state.cleared[state.category].has(item.title);

  if (alreadyCleared) {
    // 解除
    state.cleared[state.category].delete(item.title);
  } else {
    // クリア
    state.cleared[state.category].add(item.title);
    updateStars(1);
  }
  saveCleared();
  renderCards();
  renderProgressSection();
});

document.querySelector("#newQuizButton").addEventListener("click", makeQuiz);

// ─── リセットボタン ─────────────────────────────────────────

document.querySelector("#resetProgress")?.addEventListener("click", () => {
  if (!confirm("チェックをぜんぶリセットしてもいい？")) return;
  Object.keys(lessons).forEach((k) => { state.cleared[k] = new Set(); });
  saveCleared();
  renderProgressSection();
  renderCards();
  renderFocus();
});

// ─── 五十音表 ────────────────────────────────────────────────

const chartData = {
  hiragana: {
    label: "ひらがな",
    rows: [
      { label: "あ", chars: [
        { ch: "あ", romaji: "a",   word: "あひる" },
        { ch: "い", romaji: "i",   word: "いちご" },
        { ch: "う", romaji: "u",   word: "うみ" },
        { ch: "え", romaji: "e",   word: "えんぴつ" },
        { ch: "お", romaji: "o",   word: "おにぎり" }
      ]},
      { label: "か", chars: [
        { ch: "か", romaji: "ka",  word: "かさ" },
        { ch: "き", romaji: "ki",  word: "きつね" },
        { ch: "く", romaji: "ku",  word: "くも" },
        { ch: "け", romaji: "ke",  word: "けむし" },
        { ch: "こ", romaji: "ko",  word: "こいぬ" }
      ]},
      { label: "さ", chars: [
        { ch: "さ", romaji: "sa",  word: "さくら" },
        { ch: "し", romaji: "shi", word: "しんかんせん" },
        { ch: "す", romaji: "su",  word: "すいか" },
        { ch: "せ", romaji: "se",  word: "せみ" },
        { ch: "そ", romaji: "so",  word: "そら" }
      ]},
      { label: "た", chars: [
        { ch: "た", romaji: "ta",  word: "たいよう" },
        { ch: "ち", romaji: "chi", word: "ちょうちょ" },
        { ch: "つ", romaji: "tsu", word: "つき" },
        { ch: "て", romaji: "te",  word: "てんとうむし" },
        { ch: "と", romaji: "to",  word: "とり" }
      ]},
      { label: "な", chars: [
        { ch: "な", romaji: "na",  word: "なす" },
        { ch: "に", romaji: "ni",  word: "にじ" },
        { ch: "ぬ", romaji: "nu",  word: "ぬいぐるみ" },
        { ch: "ね", romaji: "ne",  word: "ねこ" },
        { ch: "の", romaji: "no",  word: "のはら" }
      ]},
      { label: "は", chars: [
        { ch: "は", romaji: "ha",  word: "はな" },
        { ch: "ひ", romaji: "hi",  word: "ひまわり" },
        { ch: "ふ", romaji: "fu",  word: "ふうせん" },
        { ch: "へ", romaji: "he",  word: "へび" },
        { ch: "ほ", romaji: "ho",  word: "ほし" }
      ]},
      { label: "ま", chars: [
        { ch: "ま", romaji: "ma",  word: "まめ" },
        { ch: "み", romaji: "mi",  word: "みかん" },
        { ch: "む", romaji: "mu",  word: "むし" },
        { ch: "め", romaji: "me",  word: "めだか" },
        { ch: "も", romaji: "mo",  word: "もも" }
      ]},
      { label: "や", chars: [
        { ch: "や", romaji: "ya",  word: "やま" },
        null,
        { ch: "ゆ", romaji: "yu",  word: "ゆき" },
        null,
        { ch: "よ", romaji: "yo",  word: "よる" }
      ]},
      { label: "ら", chars: [
        { ch: "ら", romaji: "ra",  word: "らいおん" },
        { ch: "り", romaji: "ri",  word: "りんご" },
        { ch: "る", romaji: "ru",  word: "るすばん" },
        { ch: "れ", romaji: "re",  word: "れもん" },
        { ch: "ろ", romaji: "ro",  word: "ろうそく" }
      ]},
      { label: "わ", chars: [
        { ch: "わ", romaji: "wa",  word: "わに" },
        null, null, null,
        { ch: "を", romaji: "wo",  word: "〜をつかう" }
      ]},
      { label: "ん", chars: [
        { ch: "ん", romaji: "n",   word: "でんしゃ" },
        null, null, null, null
      ]}
    ]
  },
  katakana: {
    label: "カタカナ",
    rows: [
      { label: "ア", chars: [
        { ch: "ア", romaji: "a",   word: "アイスクリーム" },
        { ch: "イ", romaji: "i",   word: "イルカ" },
        { ch: "ウ", romaji: "u",   word: "ウサギ" },
        { ch: "エ", romaji: "e",   word: "エプロン" },
        { ch: "オ", romaji: "o",   word: "オムレツ" }
      ]},
      { label: "カ", chars: [
        { ch: "カ", romaji: "ka",  word: "カメラ" },
        { ch: "キ", romaji: "ki",  word: "キャベツ" },
        { ch: "ク", romaji: "ku",  word: "クレヨン" },
        { ch: "ケ", romaji: "ke",  word: "ケーキ" },
        { ch: "コ", romaji: "ko",  word: "コアラ" }
      ]},
      { label: "サ", chars: [
        { ch: "サ", romaji: "sa",  word: "サンドイッチ" },
        { ch: "シ", romaji: "shi", word: "シール" },
        { ch: "ス", romaji: "su",  word: "スプーン" },
        { ch: "セ", romaji: "se",  word: "セーター" },
        { ch: "ソ", romaji: "so",  word: "ソファ" }
      ]},
      { label: "タ", chars: [
        { ch: "タ", romaji: "ta",  word: "タオル" },
        { ch: "チ", romaji: "chi", word: "チーズ" },
        { ch: "ツ", romaji: "tsu", word: "ツリー" },
        { ch: "テ", romaji: "te",  word: "テント" },
        { ch: "ト", romaji: "to",  word: "トマト" }
      ]},
      { label: "ナ", chars: [
        { ch: "ナ", romaji: "na",  word: "ナイフ" },
        { ch: "ニ", romaji: "ni",  word: "ニンジン" },
        { ch: "ヌ", romaji: "nu",  word: "ヌードル" },
        { ch: "ネ", romaji: "ne",  word: "ネクタイ" },
        { ch: "ノ", romaji: "no",  word: "ノート" }
      ]},
      { label: "ハ", chars: [
        { ch: "ハ", romaji: "ha",  word: "ハンバーガー" },
        { ch: "ヒ", romaji: "hi",  word: "ヒマワリ" },
        { ch: "フ", romaji: "fu",  word: "フルーツ" },
        { ch: "ヘ", romaji: "he",  word: "ヘリコプター" },
        { ch: "ホ", romaji: "ho",  word: "ホットケーキ" }
      ]},
      { label: "マ", chars: [
        { ch: "マ", romaji: "ma",  word: "マンゴー" },
        { ch: "ミ", romaji: "mi",  word: "ミルク" },
        { ch: "ム", romaji: "mu",  word: "ムービー" },
        { ch: "メ", romaji: "me",  word: "メロン" },
        { ch: "モ", romaji: "mo",  word: "モンスター" }
      ]},
      { label: "ヤ", chars: [
        { ch: "ヤ", romaji: "ya",  word: "ヤシの木" },
        null,
        { ch: "ユ", romaji: "yu",  word: "ユニコーン" },
        null,
        { ch: "ヨ", romaji: "yo",  word: "ヨーグルト" }
      ]},
      { label: "ラ", chars: [
        { ch: "ラ", romaji: "ra",  word: "ライオン" },
        { ch: "リ", romaji: "ri",  word: "リボン" },
        { ch: "ル", romaji: "ru",  word: "ルービック" },
        { ch: "レ", romaji: "re",  word: "レモン" },
        { ch: "ロ", romaji: "ro",  word: "ロケット" }
      ]},
      { label: "ワ", chars: [
        { ch: "ワ", romaji: "wa",  word: "ワニ" },
        null, null, null,
        { ch: "ヲ", romaji: "wo",  word: "〜をつかう" }
      ]},
      { label: "ン", chars: [
        { ch: "ン", romaji: "n",   word: "パンダ" },
        null, null, null, null
      ]}
    ]
  }
};

let currentChartType = "hiragana";

function renderChart() {
  const chartGrid = document.querySelector("#chartGrid");
  if (!chartGrid) return;
  const data = chartData[currentChartType];
  chartGrid.innerHTML = "";

  data.rows.forEach((row) => {
    const rowLabel = document.createElement("div");
    rowLabel.className = "chart-row-label";
    rowLabel.textContent = row.label;
    chartGrid.appendChild(rowLabel);

    row.chars.forEach((item) => {
      if (!item) {
        const empty = document.createElement("div");
        empty.className = "chart-cell chart-cell-empty";
        chartGrid.appendChild(empty);
        return;
      }
      const btn = document.createElement("button");
      btn.className = "chart-cell";
      btn.type = "button";
      btn.setAttribute("aria-label", `${item.ch}（${item.romaji}）れいご：${item.word}`);
      btn.innerHTML = `<span class="chart-char">${item.ch}</span><span class="chart-romaji">${item.romaji}</span>`;
      btn.addEventListener("click", () => openModal(item));
      chartGrid.appendChild(btn);
    });
  });
}

// ─── モーダル ─────────────────────────────────────────────

const modalOverlay = document.querySelector("#modalOverlay");
const modalChar    = document.querySelector("#modalChar");
const modalRomaji  = document.querySelector("#modalRomaji");
const modalWord    = document.querySelector("#modalWord");

function openModal(item) {
  modalChar.textContent   = item.ch;
  modalRomaji.textContent = item.romaji;
  modalWord.textContent   = item.word;
  modalOverlay.hidden = false;
  requestAnimationFrame(() => modalOverlay.classList.add("is-open"));
  document.querySelector("#modalClose").focus();
}

function closeModal() {
  modalOverlay.classList.remove("is-open");
  modalOverlay.addEventListener("transitionend", () => {
    modalOverlay.hidden = true;
  }, { once: true });
}

document.querySelector("#modalClose").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalOverlay.hidden) closeModal();
});

// チャート切り替え
document.querySelectorAll(".chart-toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".chart-toggle-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    currentChartType = btn.dataset.charttype;
    const vowels = currentChartType === "hiragana"
      ? ["あ", "い", "う", "え", "お"]
      : ["ア", "イ", "ウ", "エ", "オ"];
    const headers = document.querySelectorAll(".chart-vowel-header span");
    vowels.forEach((v, i) => { headers[i + 1].textContent = v; });
    renderChart();
  });
});

// ─── 初期化 ───────────────────────────────────────────────

starCount.textContent = state.stars;
setCategoryTheme();
renderCards();
makeQuiz();
renderChart();
renderProgressSection();
