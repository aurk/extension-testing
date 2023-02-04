// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "lecturerecorder" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('lecturerecorder.helloWorld', () => {
		vscode.window.showInformationMessage('ASA from LectureRecorder!');
	}));

	
	context.subscriptions.push(vscode.commands.registerCommand('lecturerecorder.startRecording', async () => {
		const answer = await vscode.window.showInformationMessage('Do you want start Recording?', "yes", "no");

		if(answer === 'yes') {
			vscode.window.showInformationMessage("Recording will be started in 5 seconds");
		}
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('lecturerecorder.stopRecording', async () => {
		const answer = await vscode.window.showInformationMessage('Do you want stop Recording?', "yes", "no");
		if(answer === 'yes') {
			vscode.window.showInformationMessage("Recording is stopped");
		}
	}));

}

// This method is called when your extension is deactivated
export function deactivate() {}
