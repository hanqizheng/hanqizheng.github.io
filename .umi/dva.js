import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  app.use(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/node_modules/dva-immer/dist/index.js')());
  app.model({ namespace: 'dictionary', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/dictionary.js').default) });
app.model({ namespace: 'export', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/export.js').default) });
app.model({ namespace: 'global', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/global.js').default) });
app.model({ namespace: 'orgStructureGraph', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/graph/orgStructureGraph.js').default) });
app.model({ namespace: 'imports', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/imports.js').default) });
app.model({ namespace: 'newImports', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/newImports.js').default) });
app.model({ namespace: 'payrollUploadAnimation', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/payrollUploadAnimation.js').default) });
app.model({ namespace: 'routerJumpModal', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/routerJumpModal.js').default) });
app.model({ namespace: 'subNav', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/subNav.js').default) });
app.model({ namespace: 'toastList', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/models/toastList.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/achievement/achievementManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/achievement/myAchievement/achievementWait/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/achievement/myAchievement/personAchievement/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/achievement/myAchievement/teamAchievement/model.js').default) });
app.model({ namespace: 'startPrintModel', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/contract/models/startPrintModel.js').default) });
app.model({ namespace: 'Contract', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/contract/$contractType/models/Contract.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/dashboard/model.js').default) });
app.model({ namespace: 'departureAutomation', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/departure/models/departureAutomation.js').default) });
app.model({ namespace: 'departureComment', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/departure/models/departureComment.js').default) });
app.model({ namespace: 'departureDetail', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/departure/models/departureDetail.js').default) });
app.model({ namespace: 'departureTableModel', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/departure/models/departureTableModel.js').default) });
app.model({ namespace: 'leavePrintModel', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/departure/models/leavePrintModel.js').default) });
app.model({ namespace: 'startDepartureModel', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/departure/models/startDepartureModel.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/account/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/record/askforleaveRecord/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/record/attendanceMonthly/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/record/attendanceRecord/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/record/businessRecord/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/record/outRecord/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/record/overtimeRecord/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/record/patchPunch/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/shiftMgt/shiftManagement/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/holiday/shiftMgt/shiftRecord/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/notification/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/onboarding/manage/model.js').default) });
app.model({ namespace: 'OnbordingStaffDetailTaskEdit', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/onboarding/manage/newStaffDetail/components/models/OnbordingStaffDetailTaskEdit.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/onboarding/manage/newStaffDetail/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/onboarding/tasks/model.js').default) });
app.model({ namespace: 'graphData', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/organization/graph/models/graphData.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/organization/jobPosition/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/organization/position/model.js').default) });
app.model({ namespace: 'recruitment', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/organization/recruitment/models/recruitment.js').default) });
app.model({ namespace: 'recruitmentList', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/organization/recruitment/models/recruitmentList.js').default) });
app.model({ namespace: 'reportData', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/organization/report/models/reportData.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/organization/structure/batch/$step/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/organization/structure/list/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/report/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/report/createReport/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/salaryManage/calculationPage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/salaryManage/calculationPage/salaryDetail/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/salaryManage/calculationPage/salaryDetail/preparation/checkMembers/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/salaryManage/payroll/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/salaryManage/payroll/payrollDetail/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/salaryManage/payroll/payrollSetting/model.js').default) });
app.model({ namespace: 'Salary', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/salaryManage/salary/models/Salary.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/scheduling/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/achievements/plan/createPlan/components/TopBar/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/achievements/plan/createPlan/information/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/achievements/plan/createPlan/process/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/achievements/plan/createPlan/testPlan/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/achievements/plan/list/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/achievements/setup/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/achievements/template/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/approve/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/commonSetting/print/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/external-interface/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/holiday/group/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/holiday/holidayNotice/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/holiday/holidayRule/components/GrantRecord/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/holiday/holidayRule/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/holiday/leaveRules/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/holiday/overtimeRules/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/holiday/sendHolidayIntelligently/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/holiday/shiftManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/holiday/type/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/imports/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/onboarding/fieldMap/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/onboarding/planSetting/plan/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/onboarding/planSetting/tasks/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/onboarding/welcomeEnvelope/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/addressManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/baseSetting/jobSetting/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/jobManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/jobManage/jobCateChild/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/jobManage/jobCategory/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/jobManage/jobFamily/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/jobManage/jobField/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/jobNeedsMsg/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/legalCompany/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/levelManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/orgInfo/dutyManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/orgInfo/partManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/org/rank/model.js').default) });
app.model({ namespace: 'AccountManage', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/permissions/accountManage/models/AccountManage.js').default) });
app.model({ namespace: 'EditAccountPermission', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/permissions/accountManage/models/EditAccountPermission.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/permissions/roleManage/authorSetting/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/permissions/roleManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/salary/calculationPage/calculationDetail/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/salary/calculationPage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/salary/payLevels/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/salary/plan/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/salary/standardsProject/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/salary/structure/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/salary/transferType/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/affairManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/autoStaffInfo/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/basicSetting/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/jobNumberManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/policy/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/staffCare/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/staffInfo/contractTerm/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/staffInfo/experienceManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/staffInfo/officeManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/staffInfo/recruitManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/staff/staffInfo/staffInfoManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/starffSetting/settingStarff/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/starffSetting/staffPermissions/model.js').default) });
app.model({ namespace: 'addressBookSyncModel', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/thirdParty/basic/models/addressBookSyncModel.js').default) });
app.model({ namespace: 'ThirdParty', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/thirdParty/basic/models/ThirdParty.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/thirdParty/electronicSignature/components/SignRecord/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/thirdParty/electronicSignature/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/setting/thirdParty/fieldMap/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/workflow/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/workflow/createFlow/createApproval/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/workflow/createFlow/createForm/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/workflow/createFlow/createInformation/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/workflow/createFlow/testFlow/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/workflow/staffFlow/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/staffManage/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/staffManage/staffDetail/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/staffManage/staffDetail/components/attendance/model.js').default) });
app.model({ namespace: 'StaffList', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/staffManage/staffList/$staffType/models/StaffList.js').default) });
app.model({ namespace: 'staffMangeBatchModifyModel', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/staffManage/staffList/$staffType/models/staffMangeBatchModifyModel.js').default) });
app.model({ namespace: 'model', ...(require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/pages/staffManage/staffList/$staffType/components/autoRegularDrawer/model.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
