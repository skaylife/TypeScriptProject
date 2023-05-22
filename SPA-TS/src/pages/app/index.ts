import MainPage from "../main";
import SettingsPage from "../settings";
import type Page from "../../core/templates/page";
import StatisticsPage from "../statistics";
import Header from "../../core/components/header";


export const enum PageIds {
    MainPage = "main-page",
    SettingsPage = "settings-page",
    StatisticsPage = "statistics-page"
}

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = "current-page"
    private initialPage: MainPage
    private header: Header;

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
        if (currentPageHTML) {
            currentPageHTML.remove()
        }
        let page: Page | null = null

        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage)
        } else if (idPage === PageIds.SettingsPage) {
            page = new SettingsPage(idPage)
        } else if (idPage === PageIds.StatisticsPage) {
            page = new StatisticsPage(idPage)
        }

        if (page) {
            const pageHTML = page.render()
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML)
        }
    }

    enableRouteChanges() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1)
            console.log(hash)
            App.renderNewPage(hash)
        })
    }

    constructor() {
        this.initialPage = new MainPage('main-page')
        this.header = new Header('header', 'header-container')
    }

    run() {
        App.container.append(this.header.render())
        App.renderNewPage("main-page")
        this.enableRouteChanges()
    }
}

export default App;