import { extend } from "vue/types/umd";

export class Paragraph extends Node{
    public static create(json: any) {
        const {id, style, segments} = json
        return new Paragraph(id, style, segments.map(Segment.create))
    }
    public style: IStyle
    public segments: Segment[]
    constructor(id = generateNodeId(), style = {}, segments = []){
        super(id, 'paragraph')
        this.style = style
        this.segments = segments
    }
}