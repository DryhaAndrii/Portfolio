const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];
if (!componentName) {
  console.error("❌ Set file name: npm run create-component MyComponent");
  process.exit(1);
}

const dirPath = path.join(__dirname, "../app/components", componentName);
if (fs.existsSync(dirPath)) {
  console.error("❌ Component already exist.");
  process.exit(1);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


fs.mkdirSync(dirPath);
fs.writeFileSync(
  `${dirPath}/${componentName}.tsx`,
  `import './${componentName}.scss';

export default function ${capitalizeFirstLetter(componentName)}(){
  return (
    <div className="${componentName}">
      {/* ${componentName} content */}
    </div>
  );
};
`
);

fs.writeFileSync(
  `${dirPath}/${componentName}.scss`,
  `.${componentName} {
  // styles
}
`
);

console.log(`✅ Component ${componentName} created.`);
