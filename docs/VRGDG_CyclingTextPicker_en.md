# Documentation
- Class name: VRGDG_CyclingTextPicker
- Category: VRGDG/General
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

VRGDG Cycling Text Picker is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- index
    - The step number used to choose from the list. In index mode this wraps around automatically: with 5 items, index 0 selects item 1, index 4 selects item 5, and index 5 starts over at item 1. In random modes, this still acts like the current step so each frame/batch/index can pick a different item.
    - Comfy dtype: INT
    - Python dtype: int
- items
    - The list of text choices to pick from. Works with one item per line, blank-line-separated chunks, comma-separated text, pipe-separated text, JSON arrays like ["push in", "orbit left"], Python-style lists/sets, or JSON objects with an items/values/motions key. Example: slow push in, orbit left, handheld follow.
    - Comfy dtype: STRING
    - Python dtype: str
- label
    - Optional name placed before the selected text in the formatted output. Example label Camera Motion outputs: Camera Motion = slow push in. Leave blank if you only want the selected text with no prefix.
    - Comfy dtype: STRING
    - Python dtype: str
- max_items
    - Optional limit for how many parsed list items are used. Leave at 0 to use the full list automatically. Example: if the list has 20 items and max_items is 5, only the first 5 items are used and the index loops through those 5.
    - Comfy dtype: INT
    - Python dtype: int
- split_mode
    - How to split the items text into a list. Auto tries JSON/Python first, then detects blank lines, commas, pipes, or normal lines. Use line for one item per line, blank line for paragraph/chunk lists, comma for a,b,c, pipe for a|b|c, or json/python for structured input only.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- selection_mode
    - How items are chosen. index selects by index and wraps around the list. random picks a seeded random item for each index. random no repeat creates a seeded shuffled order, walks through every item once, then reshuffles for the next cycle. Example with 5 items: indexes 0-4 use all 5 in random order before any item repeats.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- seed
    - Controls the random order for random and random no repeat modes. Same seed plus same index gives the same result, which makes workflows repeatable. Change the seed to get a different random order. Ignored by normal index mode.
    - Comfy dtype: INT
    - Python dtype: int
- multi_format
    - How multiple selected items are combined in formatted_text. auto uses the two_item_template when pick_count is 2, otherwise it uses commas. lines outputs each selected item on its own line. comma outputs item1, item2, item3. sentence uses the two_item_template for exactly 2 items.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- two_item_template
    - Editable sentence template used when pick_count is 2 and multi_format is auto or sentence. Keep {item1} and {item2} where you want the selected items inserted. You can also use {items} for both items joined by commas. Example: begin with {item1}, then transition into {item2}.
    - Comfy dtype: STRING
    - Python dtype: str
- keep_empty
    - Whether blank entries count as selectable items. Usually leave this off. If off, blank lines are ignored. If on, blank lines can be selected and may output an empty value, for example: Camera Motion = .
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- pick_count
    - How many items to select at once. Use 1 for a single motion. Use 2 to combine two motions, such as: Camera Motion = start with slow push in then follow with orbit left. For more than 2, the selected items can be output as lines or comma-separated text.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- formatted_text
    - The formatted_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- selected_item
    - The selected_item output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- selected_items
    - The selected_items output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- wrapped_index
    - The wrapped_index output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- item_count
    - The item_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
