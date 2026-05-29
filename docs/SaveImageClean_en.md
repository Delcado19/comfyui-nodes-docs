# Documentation
- Class name: SaveImageClean
- Display name: Save Image Organized
- Category: image/save
- Output node: True
- Repo Ref: https://github.com/Delcado19/comfyui-save-image-organized

Save images into a clean, readable folder structure.

Quick start:
- Leave the default Save Layout alone for the simplest setup
- Change Model Name, Text Encoder Name, or Filename only if you want different output
- Leave Export Workflow Metadata on if you want PNG metadata like ComfyUI Save Image
- Clear Save Layout only if you want the built-in folder order instead of a custom layout

Default result example:
portraits/FLUX.2 Klein 9B [5K-M]/Lockout Qwen3 4B zimage V2 [Her][Q8]/2026-04-22_15-30-10.png

For multi-image batches, %BATCH% automatically adds _1-of-4, _2-of-4, and so on.

Open the Info tab for copy-paste templates, variable explanations, and beginner examples.

# Input types
## Required
- images
    - Comfy dtype: IMAGE
- path_template
    - Main save layout. The default layout is Top Folder / Model Name / Text Encoder Name / Filename plus an automatic batch suffix for multi-image saves. Clear it only if you want the built-in order.
    - Comfy dtype: STRING
    - Default: `"%TOP_FOLDER%/%MODEL_NAME%/%TEXT_ENCODER_NAME%/%FILENAME%%BATCH%"`
- model_source
    - Choose how the model name should look. Friendly is the easiest option for most people.
    - Comfy dtype: COMBO
    - Default: `"Friendly"`
    - Options: `Friendly`, `Friendly Clean`, `Exact`, `Custom`
- clip_source
    - Choose how the text encoder name should look. Friendly is the easiest option for most people.
    - Comfy dtype: COMBO
    - Default: `"Friendly"`
    - Options: `Friendly`, `Friendly Clean`, `Exact`, `Custom`
- filename_datetime
    - Filename pattern. The default is year-month-day_hour-minute-second. Supports plain text, %date:...%, and the small %strftime:...% subset.
    - Comfy dtype: STRING
    - Default: `"%date:yyyy-MM-dd_hh-mm-ss%"`
- collision_mode
    - What to do if the file already exists. Increment is the safest default.
    - Comfy dtype: COMBO
    - Default: `"increment"`
    - Options: `increment`, `overwrite`, `error`, `seconds`
- detection_info
    - Optional runtime detection summary in the node output text. Use Summary or Verbose when you want to see which model and text encoder names were detected and selected.
    - Comfy dtype: COMBO
    - Default: `"Off"`
    - Options: `Off`, `Summary`, `Verbose`
- export_workflow_metadata
    - Store prompt and workflow metadata in the PNG, like ComfyUI's normal Save Image node. Turn this off when you want clean PNG files without embedded workflow data.
    - Comfy dtype: BOOLEAN
    - Default: `true`
## Optional
- subfolder
    - Optional extra top folder, such as portraits or test-renders.
    - Comfy dtype: STRING
    - Default: `""`
- model_folder
    - Custom model name. Used directly in Custom mode, and also as a fallback if auto-detection fails.
    - Comfy dtype: STRING
    - Default: `""`
- clip_folder
    - Custom text encoder name. Used directly in Custom mode, and also as a fallback if auto-detection fails.
    - Comfy dtype: STRING
    - Default: `""`

# Source code
[View source repository on GitHub](https://github.com/Delcado19/comfyui-save-image-organized)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
