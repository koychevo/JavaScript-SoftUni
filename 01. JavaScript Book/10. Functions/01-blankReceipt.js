function printReceipt() {

    printHeader();
    printMiddlePart();
    printFooter();

    function printHeader() {
        console.log('CASH RECEIPT');
        console.log('------------------------------');
    }

    function printMiddlePart() {
        console.log('Charged to____________________');
        console.log('Received by___________________');
    }

    function printFooter() {
        console.log('------------------------------');
        console.log('(c) SoftUni');
    }
}

printReceipt();
