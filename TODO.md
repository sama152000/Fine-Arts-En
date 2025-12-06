# TODO: Fix Tab Content Data Binding in Departments Component

## Tasks
- [ ] Update tab content section in departments.component.html to use [ngSwitch]="activeTab" on the container div
- [ ] Change each tab pane div from *ngIf="activeTab === 'tabId'" to *ngSwitchCase="'tabId'"
- [ ] Test tab switching to ensure content updates correctly
- [ ] Verify data binding for department properties within each tab pane
