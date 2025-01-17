---
id: addon_nuke_admin
title: Nuke Admin Docs
sidebar_label: Nuke
---

import ReactMarkdown from "react-markdown";
import versions from '@site/docs/assets/json/Ayon_addons_version.json'

<ReactMarkdown>
{versions.Nuke_Badge}
</ReactMarkdown>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Workfile Builder

All Workfile Builder related settings can be found here. This is a list of available features:
- Create first workfile
- Custom Template path (task type filtered)
- Run Builder profiles at first run
- Define Builder Profiles With Filters


![nuke_workfile_options_location](assets/nuke_workfile_builder_location.png)


:::important Auto Load Last Version
In case you want to set the auto load of the latest available version of workfiles, you can do it from [here](project_settings_core#open-last-workfile-at-launch).
:::

### Create first workfile

By switchintg this feature on, AYON will generate initial workfile version. Following attributes are possible to configure:


![nuke_workfile_options_create_first_version](assets/nuke_workfile_builder_create_first_workfile.png)


#### Custom templates
Custom templates are added into nuke's node graph as nodes. List of task types can be defined for templates filtering.

- Task types are sourced from project related Anatomy/Task Types


![nuke_workfile_builder_template_task_type](assets/nuke_workfile_builder_template_task_type.png)


 - multi platform path can be used in a variety of ways. Along the absolute path to a template file also an python formatting could be used. At the moment these keys are supported (image example below):
   - `root[key]`: definitions from anatomy roots
   - `project[name, code]`: project in context
   - `asset`: name of asset/shot in context
   - `task[type, name, short_name]`: as they are defined on asset/shot and in **Anatomy/Task Type** on project context

![nuke_workfile_builder_template_anatomy](assets/nuke_workfile_builder_template_anatomy.png)

#### Run Builder profiles on first launch
Enabling this feature will look into available Builder's Prorfiles (look below for more information about this feature) and load available versions into node graph.

### Builder Profiles
Builder profiles are set of rules allowing artist Load any available versions for the context of the asset, which it is run from. Preset is having following attributes:

- **Filter**: Each profile could be defined with task filter. In case no filter is defined, a profile will be working for all.

- **Context section**: filtres for product name (regex accepted), families, representation names and available Loader plugin.

- **Linked Assets/Shots**: filters for asset builds to be added


![nuke_workfile_builder_profiles](assets/nuke_workfile_builder_profiles.png)

## Custom Menu
You can add your custom tools menu into Nuke by extending definitions in **Nuke -> Scripts Menu Definition**.
![Custom menu definition](assets/nuke-admin_scriptsmenu.png)

:::note Work in progress
This is still work in progress. Menu definition will be handled more friendly with widgets and not
raw json.
:::

## Gizmo Menu
You can add your custom toolbar menu into Nuke by setting your gizmo path and extending definitions in **Nuke -> Gizmo Menu**.
![Custom menu definition](assets/nuke-admin_gizmomenu.png)

## Creator Plugins

### Exposed Knobs
`ayon+settings://nuke/create/CreateWriteRender/exposed_knobs`

This list links knobs from the write node inside, to the publish group. The name of the knobs can be found when hovering over the knob, in the tooltip in bold.

![](assets/nuke-knob_name.png)
