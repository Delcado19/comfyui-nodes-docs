# Documentation
- Class name: WAS_Samples_Passthrough_Stat_System
- Category: WAS Suite/Debug
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `stat_system` method of the WAS_Samples_Passthrough_Stat_System class is intended to provide a statistical overview of the system's current state. It captures and logs key system metrics, such as RAM and VRAM usage, as well as hard disk space utilization. This method is essential for monitoring system health and performance, offering insight into resource consumption without delving into the specifics of the underlying data collection process.

# Input types
## Required
- samples
    - The “samples” parameter is essential for executing the `stat_system` method, as it represents the latent space samples on which the system operates. It is through these samples that the system's resource utilization is evaluated, making this parameter an integral part of the node's functionality.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Output types
- samples
    - The “samples” output parameter represents the raw latent space samples passed through the system. It serves as confirmation that the input has been processed without alteration, ensuring data integrity for further use or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Samples_Passthrough_Stat_System:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'samples': ('LATENT',)}}
    RETURN_TYPES = ('LATENT',)
    RETURN_NAMES = ('samples',)
    FUNCTION = 'stat_system'
    CATEGORY = 'WAS Suite/Debug'

    def stat_system(self, samples):
        log = ''
        for stat in self.get_system_stats():
            log += stat + '\n'
        cstr('\n' + log).msg.print()
        return (samples,)

    def get_system_stats(self):
        import psutil
        ram = psutil.virtual_memory()
        ram_used = ram.used / 1024 ** 3
        ram_total = ram.total / 1024 ** 3
        ram_stats = f'Used RAM: {ram_used:.2f} GB / Total RAM: {ram_total:.2f} GB'
        device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        vram_used = torch.cuda.memory_allocated(device) / 1024 ** 3
        vram_total = torch.cuda.get_device_properties(device).total_memory / 1024 ** 3
        vram_stats = f'Used VRAM: {vram_used:.2f} GB / Total VRAM: {vram_total:.2f} GB'
        hard_drive = psutil.disk_usage('/')
        used_space = hard_drive.used / 1024 ** 3
        total_space = hard_drive.total / 1024 ** 3
        hard_drive_stats = f'Used Space: {used_space:.2f} GB / Total Space: {total_space:.2f} GB'
        return [ram_stats, vram_stats, hard_drive_stats]
```