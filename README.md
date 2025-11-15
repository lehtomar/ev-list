# ev-list
List of EVs

## Adding New Models

To add new electric vehicle models to the database:

1. Open the `models.ts` file in the root directory
2. Find the manufacturer (make) in the `MODELS_BY_MAKE` object
3. Add the new model to the array for that manufacturer in alphabetical order
4. If the manufacturer doesn't exist, create a new entry with the manufacturer name as the key and an array containing the model(s)
5. Ensure the format follows the existing structure

Example:
```typescript
"Tesla": [
  "Cybertruck",
  "Model 3",
  "Model S",
  "Model X",
  "Model Y"
]
```
