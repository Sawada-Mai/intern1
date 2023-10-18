// すべてのアコーディオン要素を取得
const accordions = document.querySelectorAll(".content__accordion");

// 各アコーディオンを個別に処理
accordions.forEach((accordion) => {
    // チェックボックスの要素を取得
    const checkbox = accordion.querySelector(".content__accordion__toggle");

    // コンテンツの要素を取得
    const content = accordion.querySelector("#hidden"); // "hidden"のIDを取得

    // チェックボックスの状態を監視し、変更があった場合に"hidden"と"show"を切り替える
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            content.id = "show"; // IDを"show"に変更
        } else {
            content.id = "hidden"; // IDを"hidden"に変更
        }
    });
});
