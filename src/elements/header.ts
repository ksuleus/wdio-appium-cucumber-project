class Header {
    private getLogo() { return $('//android.widget.ImageView[@content-desc="YouTube"]') }

    public async isLogoVisible(): Promise<boolean> {
        await this.getLogo().waitForDisplayed();
        return await this.getLogo().isDisplayed();
    }
}

export default new Header();