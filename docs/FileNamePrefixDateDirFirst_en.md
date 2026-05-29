# Documentation
- Class name: FileNamePrefixDateDirFirst
- Category: Mikey/Meta
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

FileNamePrefixDateDirFirst node generates a file name prefix based on the current date and time, offering options to include a custom directory and text. It provides a systematic approach to naming files that can be customized to meet specific requirements.

# Input types
## Required
- date
- The date parameter determines whether to include the current date in the file name prefix. It plays a key role in ensuring the generated prefix reflects the desired time context.
    - Comfy dtype: STRING
    - Python dtype: str
- date_directory
- The date_directory parameter controls whether a directory named after the current date should be added to the file name prefix. This is essential for organizing files within a date-based hierarchy.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- custom_directory
- The custom_directory parameter allows a user-defined directory to be included in the file name prefix. It enhances the node's flexibility by enabling directory customization.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_text
- The custom_text parameter permits adding specific text to the file name prefix. It offers a way to incorporate unique identifiers or descriptive text into the prefix.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- filename_prefix
- The file name prefix output provides the generated prefix that can be used as part of a file name. It contains the date, directory, and custom text elements specified by the input parameters.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class FileNamePrefixDateDirFirst:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'date': (['true', 'false'], {'default': 'true'}), 'date_directory': (['true', 'false'], {'default': 'true'}), 'custom_directory': ('STRING', {'default': ''}), 'custom_text': ('STRING', {'default': ''})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('filename_prefix',)
    FUNCTION = 'get_filename_prefix'
    CATEGORY = 'Mikey/Meta'

    def get_filename_prefix(self, date, date_directory, custom_directory, custom_text, prompt=None, extra_pnginfo=None):
        filename_prefix = ''
        if date_directory == 'true':
            ts_str = datetime.datetime.now().strftime('%y%m%d')
            filename_prefix += ts_str + '/'
        if custom_directory:
            custom_directory = search_and_replace(custom_directory, extra_pnginfo, prompt)
            filename_prefix += custom_directory + '/'
        if date == 'true':
            ts_str = datetime.datetime.now().strftime('%y%m%d%H%M%S')
            filename_prefix += ts_str
        if custom_text != '':
            custom_text = search_and_replace(custom_text, extra_pnginfo, prompt)
            custom_text = re.sub('[<>:"/\\\\|?*]', '', custom_text)
            filename_prefix += '_' + custom_text
        return (filename_prefix,)
```