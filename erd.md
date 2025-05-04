# Todos
- id
- title
- description
- project_id
- user_id
- status (pending, in_prohress, completed)
- created_at
- updated_at
- created_by

# TodoComments
- todo_id
- comment
- user_id
- parent_comment_id
- created_at
- updated_at

# Users
- id
- name
- email
- password
- created_at

# Organizations
- id
- title
- created_at

# Projects
- name
- description
- organization_id
- created_at
- created_by

# Roles
- name
- organization_id
- created_at

# Permissions
- name
- details
- created_at

# RolePermissions
- role_id
- permission_id
- cresated_at

# UserProjects
- user_id
- project_id

