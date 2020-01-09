class Element{
    
    constructor(){
        this.id;
        this.parent_id;
        this.angle_NE;
        this.angle_NO;
        this.angle_SE;
        this.angle_SO;
    }
    
    initElement(){
        
    }
    
    placeElement(angle_NE, angle_NO, angle_SE, angle_SO){
        this.angle_NE = angle_NE;
        this.angle_NO = angle_NO;
        this.angle_SE = angle_SE;
        this.angle_SO = angle_SO;
    }
    
    
}