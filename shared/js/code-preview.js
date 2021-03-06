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

        const fileContent = await response.text();

        let codeContent = fileContent;

        if(linenumbers){
            const fileContentSplit = fileContent.split(/[\r\n]/);

            const linenumbersSplit = linenumbers.split("-");
            const startLine = linenumbersSplit[0] - 1;
            const endLine = linenumbersSplit[1];

            // TODO: improve variable naming
            const fileContentSplitSelectedLines = fileContentSplit.slice(startLine, endLine);
            codeContent = fileContentSplitSelectedLines.join("\n");
        }

        // TODO: Is this the best tag? figure / figcaption? 
        const heading = document.createElement("h3");
        heading.classList.add("code-preview-heading");
        heading.textContent = filepath;
        this.append(heading);

        const pre = document.createElement("pre");
        const code = document.createElement("code");
        
        code.classList.add(fileExtension);
        code.textContent = codeContent;
       
        pre.append(code);
        this.append(pre);
        
        hljs.highlightBlock(code);
    }
}

customElements.define('code-preview', codePreview);