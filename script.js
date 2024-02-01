//your JS code here. If required.
const line = document.getElementById('line');
let rotateAngle =0;

function rotateLine(){
	rotateAngle += 2;
	line.style.transform = `rotate(${rotateAngle}deg)`;
	
	 const computedTransform = getComputedStyle(line).transform;
            if (computedTransform !== 'none') {
                setTimeout(rotateLine, 20);
            }
}
rotateLine;
