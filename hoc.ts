export interface ILinkedlist {
    addFirstNode(data: any) : void;
    addLastNode(data:any) : void;
    deleteFirstNode() : void;
    deleteLastNode() : void;
    size() :number;
}