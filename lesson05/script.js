function startApp() {
    let input = '';
    let usersBalance = 1000;
    const maxDepositCap = 50000;
    let lowBalanceCap = 300;

    do {

        let thePrompt = prompt(`Welcome to the Bank. \n Press Q to Exit. \n Press W to Withdraw \n Press D to Deposit. \n Press B to View Blance`);
        input = thePrompt;
        let withrdawPrompt = '';
        let depositPrompt = '';

        switch (input) {

            case 'Q':
                alert('Exiting the Bank...Bye !');
                break;
            case 'W':
                withrdawPrompt = prompt('Please Enter the amout to withdraw');
                let estimatedBalance = usersBalance - parseInt(withrdawPrompt);
                if (estimatedBalance < 0) {
                    alert(`You cannot withdraw this amount ${withrdawPrompt} from your account. It will cause negative balance !`);
                } else if (estimatedBalance < 300 && estimatedBalance >= 0) {
                    let warnUserWithdrawl = prompt(`Your withdrawl of $ ${withrdawPrompt} will leave you with a balance of less than $300. \n Are you sure you want to proceed ?  \ Y/N`);
                    let answer = warnUserWithdrawl;
                    if (answer === 'Y') {
                        usersBalance = estimatedBalance;
                        alert(`Your withdrawal of $ ${withrdawPrompt} from your account has been completed.`);
                        alert('Bringing main menu to see if you want to do more actions...');
                    } else {
                        alert('Bringing main menu to see if you want to do more actions...');
                    }
                } else {
                    alert(`Your withdrawal of $ ${withrdawPrompt} from your account has been completed.`);
                    usersBalance = estimatedBalance;
                    alert('Bringing main menu to see if you want to do more actions...');
                }
                break;
            case 'D':
                depositPrompt = prompt('Please Enter the amout to Deposit');
                let toBeDeposited = parseInt(depositPrompt) + usersBalance;
                if (toBeDeposited >= maxDepositCap) {
                    alert(`Your deposit of $ ${depositPrompt} will exceed the deposit cap of $ ${maxDepositCap}. `);
                    alert('Bringing main menu to see if you want to do more actions...');
                } else {
                    alert(`You will deposit a total amount of $ ${depositPrompt}`);
                    usersBalance = toBeDeposited;
                    alert('Bringing main menu to see if you want to do more actions...');
                }
                break;

            case 'B':
                if (usersBalance < lowBalanceCap) {
                    alert(`You balance is pretty low ${usersBalance}, you should have at least $300 in your account !`);
                    alert('Bringing main menu to see if you want to do more actions...');
                } else {
                    alert(`This is your current balance: $ ${usersBalance}`);
                    alert('Bringing main menu to see if you want to do more actions...');
                }
                break;
        }
    } while (input != 'Q');
}