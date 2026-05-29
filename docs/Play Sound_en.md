# Documentation
- Class name: Play_Sound_Now
- Category: 😺dzNodes
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_MSSpeech_TTS

The Play_Sound_Now node is designed to achieve instant playback of audio files. It loads the specified sound effect file and uses a separate thread for playback to ensure minimal interference with the main program flow. This node is particularly suitable for application scenarios that require audio feedback or alerts with low latency.

# Input types
## Required
- path
    - The ‘path’ parameter specifies the file path of the audio file to be played. It is crucial for the node's operation because it guides the node to find the correct audio file. Without a valid path, the node cannot work, so this is a required parameter.
    - Comfy dtype: STRING
    - Python dtype: str
- volume
    - The ‘volume’ parameter is used to adjust the volume of the audio playback. It is an important setting for controlling the audio output level and ensuring it meets the application's requirements. The volume can be set between 0.0 and 1.0, where 1.0 represents the default volume.
    - Comfy dtype: FLOAT
    - Python dtype: float
- speed
    - The ‘speed’ parameter changes the playback speed of the audio. It is significant for altering the tempo of the sound without changing its pitch. The speed can vary between 0.1 and 2.0, allowing multiple options for playback speed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trigger
    - The ‘trigger’ parameter determines whether to start audio playback. It is a critical control that directly affects the execution of the node's main function. If set to True, the audio is played; otherwise, it remains silent.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- result
    - The ‘result’ parameter of the Play_Sound_Now node does not return any specific data, but indicates the successful start of the audio playback process. It is a placeholder for any possible future enhancements or status messages related to node operation.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class Play_Sound_Now:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'path': ('STRING', {'default': 'comfyui.mp3'}), 'volume': ('FLOAT', {'default': 1, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'speed': ('FLOAT', {'default': 1, 'min': 0.1, 'max': 2.0, 'step': 0.1}), 'trigger': ('BOOLEAN', {'default': True})}, 'optional': {}}
    RETURN_TYPES = ()
    FUNCTION = 'do_playsound'
    OUTPUT_NODE = True
    CATEGORY = '😺dzNodes'

    def do_playsound(self, path, volume, speed, trigger):
        print(f'# 😺dzNodes: PlaySound: path={path},volume={volume},speed={speed},trigger={trigger}')
        if trigger:
            t = threading.Thread(target=Play(path, volume, speed))
            t.start()
        return {}
```