// すべてのアコーディオン要素を取得
const accordions = document.querySelectorAll(".content__accordion");

// 各アコーディオンを個別に処理
accordions.forEach((accordion) => {
    // チェックボックスの要素を取得
    const checkbox = accordion.querySelector(".content__accordion__toggle");
    const image = accordion.querySelector("#sign"); // アコーディオン内のアイコン
    const content = accordion.querySelector("#hidden");
    const plusImagePath = "./img/plus.svg";
    const minusImagePath = "./img/minus.svg";

    // チェックボックスの状態を監視し、変更があった場合に"hidden"と"show"を切り替える
    accordion.addEventListener("click", function () {
        // チェックボックスの状態を切り替え
        checkbox.checked = !checkbox.checked;

        if (checkbox.checked) {
            content.id = "show"; // IDを"show"に変更
            image.src = minusImagePath;
        } else {
            content.id = "hidden"; // IDを"hidden"に変更
            image.src = plusImagePath;
        }
    });
});

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination", //必須の設定：ページネーションのclass指定
        type: "bullets",
        clickable: "clickable"
    },
    loop: true, //繰り返し指定
    spaceBetween: 10 //スライド感の余白
});
