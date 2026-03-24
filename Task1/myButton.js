export class Button {
    constructor(btnText, btnBgColor, btnTitle) {
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;
    }

    show() {
        document.write(
            `<button style="background-color:${this.btnBgColor}; padding:10px 20px; margin:5px; border:none; cursor:pointer; font-size:16px;" title="${this.btnTitle}">${this.btnText}</button>`
        );
    }
}
