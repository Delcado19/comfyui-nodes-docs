
# Documentation
- Class name: Metadata extractor [Crystools]
- Category: crystools 🪛/Metadata
- Output node: False

The Metadata Extractor node processes and transforms raw metadata into a structured, more understandable format. It focuses on extracting, validating, and formatting metadata from various sources, ensuring the data is ready for further analysis or processing.

# Input types
## Required
- metadata_raw
    - This node processes the raw metadata input. This parameter is critical because it serves as the primary data source for extraction and transformation operations.
    - Comfy dtype: METADATA_RAW
    - Python dtype: Optional[Dict[str, Any]]

# Output types
- prompt
    - The 'prompt' information extracted from the raw metadata provides insight into the user's initial input or command.
    - Comfy dtype: JSON
    - Python dtype: str
- workflow
    - The 'workflow' information extracted from the raw metadata outlines the sequence of operations or tasks.
    - Comfy dtype: JSON
    - Python dtype: str
- file info
    - The 'file info' extracted from the raw metadata details the characteristics or attributes of the related files.
    - Comfy dtype: JSON
    - Python dtype: str
- raw to JSON
    - The version of the raw metadata converted into a structured JSON format.
    - Comfy dtype: JSON
    - Python dtype: str
- raw to property
    - An attribute-style representation of the raw metadata for easier access and manipulation.
    - Comfy dtype: STRING
    - Python dtype: str
- raw to csv
    - A CSV representation of the raw metadata, enabling compatibility with spreadsheet applications and data analysis tools.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CMetadataExtractor:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "metadata_raw": METADATA_RAW,
            },
            "optional": {
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.METADATA.value
    RETURN_TYPES = ("JSON", "JSON", "JSON", "JSON", "STRING", "STRING")
    RETURN_NAMES = ("prompt", "workflow", "file info", "raw to JSON", "raw to property", "raw to csv")
    # OUTPUT_NODE = True

    FUNCTION = "execute"

    def execute(self, metadata_raw=None):
        prompt = {}
        workflow = {}
        fileinfo = {}
        text = ""
        csv = ""

        if metadata_raw is not None and isinstance(metadata_raw, dict):
            try:
                for key, value in metadata_raw.items():

                    if isinstance(value, dict):
                        # yes, double json.dumps is needed for jsons
                        value = json.dumps(json.dumps(value))
                    else:
                        value = json.dumps(value)

                    text += f"\"{key}\"={value}\n"
                    # remove spaces
                    # value = re.sub(' +', ' ', value)
                    value = re.sub('\n', ' ', value)
                    csv += f'"{key}"\t{value}\n'

                if csv != "":
                    csv = '"key"\t"value"\n' + csv

            except Exception as e:
                logger.warn(e)

            try:
                if "prompt" in metadata_raw:
                    prompt = metadata_raw["prompt"]
                else:
                    raise Exception("Prompt not found in metadata_raw")
            except Exception as e:
                logger.warn(e)

            try:
                if "workflow" in metadata_raw:
                    workflow = metadata_raw["workflow"]
                else:
                    raise Exception("Workflow not found in metadata_raw")
            except Exception as e:
                logger.warn(e)

            try:
                if "fileinfo" in metadata_raw:
                    fileinfo = metadata_raw["fileinfo"]
                else:
                    raise Exception("Fileinfo not found in metadata_raw")
            except Exception as e:
                logger.warn(e)

        elif metadata_raw is None:
            logger.debug("metadata_raw is None")
        else:
            logger.warn(TEXTS.INVALID_METADATA_MSG.value)

        return (json.dumps(prompt, indent=CONFIG["indent"]),
                json.dumps(workflow, indent=CONFIG["indent"]),
                json.dumps(fileinfo, indent=CONFIG["indent"]),
                json.dumps(metadata_raw, indent=CONFIG["indent"]),
                text, csv)

```
