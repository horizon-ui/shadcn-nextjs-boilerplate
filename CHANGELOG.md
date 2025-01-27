## [3.0.0] 2025-27-01

### Upgraded to React 19 ⚡️

### Upgraded to Next.js 15 ⚡️

## [2.1.1] 2024-09-10

### Signout fixed ⚡️
- Fixed a bug where you couldn't sign out or change name in Supabase.

## [2.1.0] 2024-09-05

### Added Profile Settings page. ⚡️
- Added a new Profile Settings page.

## [2.0.0] 2024-08-26

### Big update: Supabase SSR, Refactoring & custom auth components

- #### Supabase SSR
- Utils ⁠ folder refactored, now functions are organized in separate folders based on usage
- ⁠New auth-related utils
- ⁠Functions like ⁠ getSessions ⁠ were removed because of the use of Supabase SSR
- session ⁠ object was replaced with ⁠ user ⁠ throughout the project

- #### Layout refactoring
- ⁠The multiple addition of functionalities led to prop drilling, which was fixed by using contexts.

- #### Separate auth pages
- ⁠Auth pages are dynamic Next.js pages, one for each of Update password, sign up, password sign in, etc.
- ⁠The forms for each type of authentication types are located in ⁠ @/components/auth-ui 

- #### Added Docker support
- You can now develop locally via Docker by using Supabase CLI

## [1.1.0] 2024-07-18

### Added Main Dashboard Page

- Added Main Dashboard Page

## [1.0.0] 2024-05-20

### Initial Release

- Added Shadcn UI as base framework
