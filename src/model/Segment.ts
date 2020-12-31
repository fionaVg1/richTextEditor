export class Segment extends Node {
    public static create(json:any){
        const {id, text, style} = json;
        return new Segment(id, text, style);
    }
    public text: string
    public style: IStyle
    constructor(id = generateNodeId(), text = '', style = {}){
        super(id,'segment')
        this.text = text
        this.style = style
    }
}