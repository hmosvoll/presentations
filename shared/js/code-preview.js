class codePreview extends HTMLElement {
    constructor() {
        super();
        this.init();
    }
    async init(){
        const filepath = this.getAttribute("file");
        const linenumbers = this.getAttribute("lines");
        const fileExtension = /[a-z]+$/.exec(filepath)[0];
        
        // console.log("Filepath: ", filepath);
        // console.log("Lines: ", lines);

        // TODO: Error handling 
        const response = await fetch(filepath);

        const fileString = await response.text();
        // console.log(fileLines);

        // if(linenumbers){
        //     const fileLines = fileString.split(/[\r\n]+/);

        //     const linenumbersSplit = linenumbers.split("-");
        //     const startLine = linenumbersSplit[0];
        //     const endLine = linenumbersSplit[1];

        //     fileLines.slice(2, 4)
        // }

        const pre = document.createElement("pre");
        const code = document.createElement("code");

        console.log(filepath);
        console.log(fileExtension);
        
        code.classList.add(fileExtension);
        code.textContent = fileString;

        pre.append(code);
        this.append(pre);

        hljs.highlightBlock(code);
    }
}

customElements.define('code-preview', codePreview);