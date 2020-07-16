import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'createtask',
    loadChildren: () => import('./pages/createtask/createtask.module').then( m => m.CreatetaskPageModule)
  },
  {
    path: 'createdtask',
    loadChildren: () => import('./pages/createdtask/createdtask.module').then( m => m.CreatedtaskPageModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./pages/userlist/userlist.module').then( m => m.UserlistPageModule)
  },
  
  {
    path: 'pendingtask',
    loadChildren: () => import('./pages/pendingtask/pendingtask.module').then( m => m.PendingtaskPageModule)
  },
  {
    path: 'viewtask',
    loadChildren: () => import('./pages/viewtask/viewtask.module').then( m => m.ViewtaskPageModule)
  },
  {
    path: 'notask',
    loadChildren: () => import('./pages/notask/notask.module').then( m => m.NotaskPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'customsort',
    loadChildren: () => import('./pages/customsort/customsort.module').then( m => m.CustomsortPageModule)
  },
  {
    path: 'prioritysort',
    loadChildren: () => import('./pages/prioritysort/prioritysort.module').then( m => m.PrioritysortPageModule)
  },
  {
    path: 'listtask',
    loadChildren: () => import('./pages/listtask/listtask.module').then( m => m.ListtaskPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'newlist',
    loadChildren: () => import('./pages/newlist/newlist.module').then( m => m.NewlistPageModule)
  },
  {
    path: 'deletetask',
    loadChildren: () => import('./pages/deletetask/deletetask.module').then( m => m.DeletetaskPageModule)
  },
  {
    path: 'addcontact',
    loadChildren: () => import('./pages/addcontact/addcontact.module').then( m => m.AddcontactPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profileedit',
    loadChildren: () => import('./pages/profileedit/profileedit.module').then( m => m.ProfileeditPageModule)
  },
  {
    path: 'welcomescreen',
    loadChildren: () => import('./pages/welcomescreen/welcomescreen.module').then( m => m.WelcomescreenPageModule)
  },
  {
    path: 'groupmanage',
    loadChildren: () => import('./pages/groupmanage/groupmanage.module').then( m => m.GroupmanagePageModule)
  },
  {
    path: 'createlist',
    loadChildren: () => import('./pages/createlist/createlist.module').then( m => m.CreatelistPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
