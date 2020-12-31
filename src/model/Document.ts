export class Document extends Node{
    public static create(json:any){
        const {id,nodes} = json
        return new Document(id,nodes.map(Paragraph.create))
    }
    public nodes:Paragraph[]
    constructor(id=generateNodeId(),nodes=[]){
        super(id,'document')
        this.nodes = nodes
    }
}