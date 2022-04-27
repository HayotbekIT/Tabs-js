const tabs = document.querySelectorAll("[data-control='tab']");
tabs.forEach((tab) => {
    // console.log(tab);
    const tabButtons = tab.querySelectorAll("[data-control='nav-button']");
    // console.log(tabButtons);
    const tabBlocks = tab.querySelectorAll("[data-control='tab-block']");
    // console.log(tabBlocks);
    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // console.log(button);
            const currentButton = button;
            const tabBlock = tab.querySelectorAll("[data-control='tab-block']")[index];
            // console.log(tabBlock);
            tabButtons.forEach((item) => {
                item.classList.remove("active");
            });
            tabBlocks.forEach((item) => {
                item.classList.remove("active");
            });
            currentButton.classList.add("active");
            tabBlock.classList.add("active");
        });
    });
});