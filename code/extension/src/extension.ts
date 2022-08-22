import { ExtensionContext, commands, window } from 'vscode';

import { SidebarProvider } from './providers/SidebarProvider';

export function activate(context: ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);

  context.subscriptions.push(window.registerWebviewViewProvider('snippin-view', sidebarProvider));

  context.subscriptions.push(
    commands.registerCommand('vscode-snippin.install', () => {
      window.showInformationMessage('Snippin is installed');
    })
  );
}

export function deactivate() {}