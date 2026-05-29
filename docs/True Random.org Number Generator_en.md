# Documentation
- Class name: WAS_True_Random_Number
- Category: WAS Suite/Number
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_True_Random_Number node aims to generate random numbers with high security and reliability. It utilizes the RANDOM.ORG API to provide users with true random numbers, ensuring a high degree of unpredictability and fairness in applications where randomness is critical.

# Input types
## Required
- api_key
    - The API key is essential for accessing the RANDOM.ORG service. It authenticates user requests and enables the generation of random numbers. Without a valid API key, the node cannot perform its intended function.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- minimum
    - The minimum value parameter defines the lower limit of the range for generating random numbers. It ensures the output meets the specified minimum criteria, which is crucial for applications with specific numerical requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- maximum
    - The maximum value parameter sets the upper limit for the range of random numbers generated. This is important for controlling the scale of numbers and aligning them with the application's needs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - The mode parameter determines whether random numbers are generated in a random or fixed sequence. This can affect the predictability and use case of the numbers, making it an important choice for users.
    - Comfy dtype: COMBO[random, fixed]
    - Python dtype: str

# Output types
- number
    - The output number is the core result of the node's operation. It represents the true random number generated within the specified range and is a fundamental element for applications requiring randomness.
    - Comfy dtype: COMBO[NUMBER, FLOAT, INT]
    - Python dtype: Union[int, float]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_True_Random_Number:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'api_key': ('STRING', {'default': '00000000-0000-0000-0000-000000000000', 'multiline': False}), 'minimum': ('FLOAT', {'default': 0, 'min': -18446744073709551615, 'max': 18446744073709551615}), 'maximum': ('FLOAT', {'default': 10000000, 'min': -18446744073709551615, 'max': 18446744073709551615}), 'mode': (['random', 'fixed'],)}}
    RETURN_TYPES = ('NUMBER', 'FLOAT', 'INT')
    FUNCTION = 'return_true_randm_number'
    CATEGORY = 'WAS Suite/Number'

    def return_true_randm_number(self, api_key=None, minimum=0, maximum=10):
        number = self.get_random_numbers(api_key=api_key, minimum=minimum, maximum=maximum)[0]
        return (number,)

    def get_random_numbers(self, api_key=None, amount=1, minimum=0, maximum=10, mode='random'):
        """Get random number(s) from random.org"""
        if api_key in [None, '00000000-0000-0000-0000-000000000000', '']:
            cstr('No API key provided! A valid RANDOM.ORG API key is required to use `True Random.org Number Generator`').error.print()
            return [0]
        url = 'https://api.random.org/json-rpc/2/invoke'
        headers = {'Content-Type': 'application/json'}
        payload = {'jsonrpc': '2.0', 'method': 'generateIntegers', 'params': {'apiKey': api_key, 'n': amount, 'min': minimum, 'max': maximum, 'replacement': True, 'base': 10}, 'id': 1}
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        if response.status_code == 200:
            data = response.json()
            if 'result' in data:
                return (data['result']['random']['data'], float(data['result']['random']['data']), int(data['result']['random']['data']))
        return [0]

    @classmethod
    def IS_CHANGED(cls, api_key, mode, **kwargs):
        m = hashlib.sha256()
        m.update(api_key)
        if mode == 'fixed':
            return m.digest().hex()
        return float('NaN')
```