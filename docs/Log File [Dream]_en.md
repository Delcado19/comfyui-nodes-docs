
# Documentation
- Class name: Log File [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Log File [Dream] node is dedicated to recording and organizing log entries related to frame counters and other specified inputs in Dream projects. It supports conditional logging based on active state, allows custom log file paths, and can output logs to both a file and standard output (stdout) for real‑time monitoring and persistent storage.

# Input types
## Required
- frame_counter
- This required input integrates the frame counter into the logging process, enhancing log detail and usefulness for animation and timing analysis.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- log_directory
- Specifies the directory where the log file will be saved, enabling flexible management and organization of logs in the file system.
    - Comfy dtype: STRING
    - Python dtype: str
- log_filename
- Defines the name of the log file that records entries, making it easy to identify and access a specific log for review or analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- stdout
- Determines whether log entries are also output to standard output (stdout), providing real‑time monitoring of log messages.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- active
- Controls whether logging is active. If false, logging operations are bypassed, allowing conditional logging based on runtime conditions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- clock_has_i_hours
- Indicates whether timestamps in log entries should use a 24‑hour clock format, affecting readability and standardization of time records.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- entry_i
- Optional log entry inputs allow multiple entries to be aggregated into a single log file. Supports up to 8 entries, increasing log detail and organization.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
