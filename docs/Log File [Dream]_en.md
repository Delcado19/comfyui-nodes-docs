
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
```python
class DreamLogFile:
    NODE_NAME = "Log File"
    ICON = "🗎"
    OUTPUT_NODE = True
    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = ()
    RETURN_NAMES = ()
    FUNCTION = "write"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter | {
                "log_directory": ("STRING", {"default": comfy_paths.output_directory}),
                "log_filename": ("STRING", {"default": "dreamlog.txt"}),
                "stdout": ("BOOLEAN", {"default": True}),
                "active": ("BOOLEAN", {"default": True}),
                "clock_has_24_hours": ("BOOLEAN", {"default": True}),
            },
            "optional": {
                "entry_0": (LogEntry.ID,),
                "entry_1": (LogEntry.ID,),
                "entry_2": (LogEntry.ID,),
                "entry_3": (LogEntry.ID,),
                "entry_4": (LogEntry.ID,),
                "entry_5": (LogEntry.ID,),
                "entry_6": (LogEntry.ID,),
                "entry_7": (LogEntry.ID,),
            },
        }

    def _path_to_log_file(self, log_directory, logfile):
        if os.path.isabs(logfile):
            return os.path.normpath(os.path.abspath(logfile))
        elif os.path.isabs(log_directory):
            return os.path.normpath(os.path.abspath(os.path.join(log_directory, logfile)))
        elif log_directory:
            return os.path.normpath(os.path.abspath(os.path.join(comfy_paths.output_directory, log_directory, logfile)))
        else:
            return os.path.normpath(os.path.abspath(os.path.join(comfy_paths.output_directory, logfile)))

    def _get_tm_format(self, clock_has_24_hours):
        if clock_has_24_hours:
            return "%a %H:%M:%S"
        else:
            return "%a %I:%M:%S %p"

    def write(self, frame_counter: FrameCounter, log_directory, log_filename, stdout, active, clock_has_24_hours,
              **entries):
        if not active:
            return ()
        log_entry = None
        for i in range(8):
            e = entries.get("entry_" + str(i), None)
            if e is not None:
                if log_entry is None:
                    log_entry = e
                else:
                    log_entry = log_entry.merge(e)
        log_file_path = self._path_to_log_file(log_directory, log_filename)
        ts = _logfile_state.get_section("timestamps").get(log_file_path, 0)
        output_text = list()
        last_t = 0
        for (t, text) in log_entry.get_filtered_entries(ts):
            dt = datetime.datetime.fromtimestamp(t)
            output_text.append("[frame {}/{} (~{}%), timestamp {}]\n{}".format(frame_counter.current_frame + 1,
                                                                               frame_counter.total_frames,
                                                                               round(frame_counter.progress * 100),
                                                                               dt.strftime(self._get_tm_format(
                                                                                   clock_has_24_hours)), text.rstrip()))
            output_text.append("---")
            last_t = max(t, last_t)
        output_text = "\n".join(output_text) + "\n"
        if stdout:
            print(output_text)
        with open(log_file_path, "a", encoding="utf-8") as f:
            f.write(output_text)
        _logfile_state.get_section("timestamps").update(log_file_path, 0, lambda _: last_t)
        return ()

```
