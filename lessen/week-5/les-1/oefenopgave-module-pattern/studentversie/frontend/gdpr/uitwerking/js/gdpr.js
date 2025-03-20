
////////As a RMP

// Check_GDPR = (function (){
//     const init = () => {
//         showStatus();
//         showContent();
//         bindEvents();
//
//         if(cookieStatus() !== 'accept') showGDPR();
//     }
//
//     const bindEvents = () => {
//         let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
//         buttonAccept.addEventListener('click', () => {
//             cookieStatus('accept');
//             showStatus();
//             showContent();
//             hideGDPR();
//         });
//
//         let buttonReject = document.querySelector('.gdpr-consent__button--reject');
//         buttonReject.addEventListener('click', () => {
//             cookieStatus('reject');
//             showStatus();
//             showContent();
//             hideGDPR();
//         });
//
//     }
//
//     const showContent = () => {
//         resetContent();
//         const status = cookieStatus() == null ? 'not-chosen' : cookieStatus();
//         const element = document.querySelector(`.content-gdpr-${status}`);
//         element.classList.add('show');
//
//     }
//
//     const resetContent = () => {
//         const classes = [
//             '.content-gdpr-accept',
//
//             '.content-gdpr-reject',
//
//             '.content-gdpr-not-chosen'];
//
//         for(const c of classes){
//             document.querySelector(c).classList.add('hide');
//             document.querySelector(c).classList.remove('show');
//         }
//     }
//
//     const showStatus = () => {
//         document.getElementById('content-gpdr-consent-status').innerHTML =
//             cookieStatus() == null ? 'Niet gekozen' : cookieStatus();
//     }
//
//     const cookieStatus = (status) => {
//         if (status) localStorage.setItem('gdpr-consent-choice', status);
//
//         if(status) saveMetaData();
//
//         return localStorage.getItem('gdpr-consent-choice');
//     }
//
//
//     const saveMetaData = () => {
//         const date = new Date();
//         let metadata  = {
//             datum: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
//             tijd: `${date.getHours()}:${date.getMinutes()}`
//         }
//         localStorage.setItem('gdpr-consent-metadata', JSON.stringify(metadata) );
//     }
//
//     const hideGDPR = () => {
//         document.querySelector(`.gdpr-consent`).classList.add('hide');
//         document.querySelector(`.gdpr-consent`).classList.remove('show');
//     }
//
//     const showGDPR = () => {
//         document.querySelector(`.gdpr-consent`).classList.add('show');
//     }
//
//
//     init();
//
//
//     return {
//         init: init,
//     }
// })();
//
// Check_GDPR.init();

////////As a class

class Check_GDPR {
    constructor(){
        this.#showStatus();
        this.#showContent();
        this.#bindEvents();

        if(this.#cookieStatus() !== 'accept') this.#showGDPR();
    }

    #bindEvents(){
        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            this.#cookieStatus('accept');
            this.#showStatus();
            this.#showContent();
            this.#hideGDPR();
        });

        let buttonReject = document.querySelector('.gdpr-consent__button--reject');
        buttonReject.addEventListener('click', () => {
            this.#cookieStatus('reject');
            this.#showStatus();
            this.#showContent();
            this.#hideGDPR();
        });
    }
    #showContent(){
        this.#resetContent();
        const status = this.#cookieStatus() == null ? 'not-chosen' : this.#cookieStatus();
        const element = document.querySelector(`.content-gdpr-${status}`);
        element.classList.add('show');
    }
    #resetContent() {
        const classes = [
            '.content-gdpr-accept',

            '.content-gdpr-reject',

            '.content-gdpr-not-chosen'];

        for(const c of classes){
            document.querySelector(c).classList.add('hide');
            document.querySelector(c).classList.remove('show');
        }
    }
    #showStatus() {
        document.getElementById('content-gpdr-consent-status').innerHTML =
            this.#cookieStatus() == null ? 'Niet gekozen' : this.#cookieStatus();
    }
    #cookieStatus(status) {
        if (status) localStorage.setItem('gdpr-consent-choice', status);

        if(status) this.#saveMetaData();

        return localStorage.getItem('gdpr-consent-choice');
    }
    #saveMetaData() {
        const date = new Date();
        let metadata  = {
            datum: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
            tijd: `${date.getHours()}:${date.getMinutes()}`
        }
        localStorage.setItem('gdpr-consent-metadata', JSON.stringify(metadata) );
    }
    #hideGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }
    #showGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }
}
Check_GDPR = new Check_GDPR();


