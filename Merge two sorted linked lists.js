function mergeLists(head1, head2) {
    if(head1 == null) {return head2;}
    if(head2 == null) {return head1;}
    let output = new SinglyLinkedList();
    
    while(head1 && head2) {
        if(head1.data <= head2.data) {
            output.insertNode(head1.data);
            head1 = head1.next;
        } else {
            output.insertNode(head2.data);
            head2 = head2.next;
        }
    }
    
    while(head1) {
        output.insertNode(head1.data);
        head1 = head1.next;
    }
    
    while(head2) {
        output.insertNode(head2.data);
        head2 = head2.next;
    }

    return output.head;
}
