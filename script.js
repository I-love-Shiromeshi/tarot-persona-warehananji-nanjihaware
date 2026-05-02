const tarotCards = [

{name:"愚者", file:"000愚者.jpg", rev:"000愚者 - コピー.jpg",
up:["無邪気","冒険家","自由","楽天的"],
down:["夢想","愚行","無計画","無謀"]},

{name:"魔術師", file:"001魔術師.jpg", rev:"001魔術師 - コピー.jpg",
up:["創造","自信","技術","才能"],
down:["混迷","未熟","消極的","自信喪失"]},

{name:"女教皇", file:"002女教皇.jpg", rev:"002女教皇 - コピー.jpg",
up:["知性","聡明","神秘","英知","判断"],
down:["批判","悲観","冷徹","無視","無神経"]},

{name:"女帝", file:"003女帝.jpg", rev:"003女帝 - コピー.jpg",
up:["豊穣","満足","包容力","魅力","愛情"],
down:["嫉妬","我儘","浪費","感情的","怠惰"]},

{name:"皇帝", file:"004皇帝.jpg", rev:"004皇帝 - コピー.jpg",
up:["支配","権力","安定","成功","責任"],
down:["過信","傲慢","孤立","身勝手","独断的"]},

{name:"法王", file:"005法王.jpg", rev:"005法王 - コピー.jpg",
up:["慈悲","優しさ","法の順守","尊敬","寛大"],
down:["保守的","束縛","不信感","虚栄","頑固"]},

{name:"恋愛", file:"006恋愛.jpg", rev:"006恋愛 - コピー.jpg",
up:["恋愛","情熱","結婚","ときめく心","調和"],
down:["誘惑","不道徳な性","関係の破綻"]},

{name:"戦車", file:"007戦車.jpg", rev:"007戦車 - コピー.jpg",
up:["実行力","強い意思","迅速","勝利","征服"],
down:["無気力","人任せ","イライラ","失敗"]},

{name:"正義", file:"008正義.jpg", rev:"008正義 - コピー.jpg",
up:["強い意思","自制","不屈","理性","力量"],
down:["無力","力不足","諦め","優柔不断","落胆"]},

{name:"隠者", file:"009隠者.jpg", rev:"009隠者 - コピー.jpg",
up:["精神性","内観","悟り","思慮深い","慎重"],
down:["消極","悲観","保守的","閉鎖的","籠る"]},

{name:"運命", file:"010運命.jpg", rev:"010運命 - コピー.jpg",
up:["一時的な幸運","変化","運命","出会い"],
down:["アクシデント","急激な悪化","すれ違い"]},

{name:"剛毅", file:"011剛毅.jpg", rev:"011剛毅 - コピー.jpg",
up:["公正な判断","均衡","正しさ","平等"],
down:["罪","不正","均衡が崩れる","不平等"]},

{name:"刑死者", file:"012刑死者.jpg", rev:"012刑死者 - コピー.jpg",
up:["試練","修行","努力","苦労が報われる"],
down:["報われない苦悩","徒労","投げやり"]},

{name:"死神", file:"013死神.jpg", rev:"013死神 - コピー.jpg",
up:["強制終了","中止","破局","終焉","停止"],
down:["再生","再スタート","起死回生","新展開"]},

{name:"節制", file:"014節制.jpg", rev:"014節制 - コピー.jpg",
up:["循環","順調","調和","管理","淀みない"],
down:["浪費","淀み","不均衡","停止","惰性"]},

{name:"悪魔", file:"015悪魔.jpg", rev:"015悪魔 - コピー.jpg",
up:["誘惑","堕落","裏切り","破滅","依存"],
down:["解放","再生","目覚め","執着を手放す"]},

{name:"塔", file:"016塔.jpg", rev:"016塔 - コピー.jpg",
up:["災害","災難","事故","崩壊","ショック"],
down:["不名誉","緊迫状態","受難","不安定"]},

{name:"星", file:"017星.jpg", rev:"017星 - コピー.jpg",
up:["直感","閃き","希望","憧れ","目標"],
down:["失望","高望み","失意","幻滅","無気力"]},

{name:"月", file:"018月.jpg", rev:"018月 - コピー.jpg",
up:["不安","憂鬱","中途半端","誤解","移ろい"],
down:["脱却","明晰","トラウマの解消","回復"]},

{name:"太陽", file:"019太陽.jpg", rev:"019太陽 - コピー.jpg",
up:["天真爛漫","無邪気","喜び","栄光","成功"],
down:["不調","落胆","失墜","悪化","否定"]},

{name:"審判", file:"020審判.jpg", rev:"020審判 - コピー.jpg",
up:["復活","祝福","再生","再チャレンジ"],
down:["警告","罰","消滅","暗闇","罪の償い"]},

{name:"世界", file:"021世界.jpg", rev:"021世界 - コピー.jpg",
up:["完成","理想郷","成功","充足","完璧"],
down:["未完成","惰性","物足りなさ","低迷"]}

];

let revealed = false;

function drawTarot(){

    const img = document.getElementById("card");
    const result = document.getElementById("result");
    const meaning = document.getElementById("meaning");
    const button = document.querySelector("button");

    if(revealed){
        resetTarot();
        return;
    }

    const num = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[num];
    const reversed = Math.random() < 0.5;

    img.style.transform = "rotateY(90deg)";

    setTimeout(() => {

        if(reversed){

            img.src = "cards/" + card.rev;
            result.textContent = card.name + " の逆位置";

            meaning.textContent =
            "・" + card.down[0] + "\n" +
            "・" + card.down[1] + "\n" +
            "・" + card.down[2];

        }else{

            img.src = "cards/" + card.file;
            result.textContent = card.name + " の正位置";

            meaning.textContent =
            "・" + card.up[0] + "\n" +
            "・" + card.up[1] + "\n" +
            "・" + card.up[2];
        }

        img.style.transform = "rotateY(0deg)";

    }, 600);

    button.textContent = "もう一度占う";
    revealed = true;
}

function resetTarot(){

    const img = document.getElementById("card");
    const result = document.getElementById("result");
    const meaning = document.getElementById("meaning");
    const button = document.querySelector("button");

    result.textContent = "";
    meaning.textContent = "";

    img.style.transform = "rotateY(90deg)";

    setTimeout(() => {

        img.src = "cards/back.jpg";
        img.style.transform = "rotateY(0deg)";

    }, 600);

    button.textContent = "占う";
    revealed = false;
}