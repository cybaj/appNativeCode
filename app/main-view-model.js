const Observable = require("tns-core-modules/data/observable").Observable;
const platformModule = require("tns-core-modules/platform");
const application = require("tns-core-modules/application");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
        if (platformModule.isAndroid) {
            const myClassInstance = new com.example.myapplication.MyClass();
            myClassInstance.logInfo();
            org.example.MyToast.showToast(application.android.context, "You pressed the button", "short");
        } else if (platformModule.isIOS) {
            const myClassInstance = new MyClass();
            myClassInstance.logInfo();
        }
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
