<template>
  <div>
    <!-- show image when empty -->
    <!-- <div class="container">
      <div class="row">
        <div class="col-4">
          <h1>It looks so empty!</h1>
          <h4>Start by creating your first article.</h4>
        </div>
        <div class="col-2"></div>
        <div class="col-3">
          <button class="btn wide">+ Create new article</button>
        </div>
      </div>
    </div>

    <img src="@/assets/image.svg" height="700" width="700" alt="" /> -->

    <!-- show loader when searching for stuff -->
    <!-- <loader/> -->

    <!-- <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br /> -->
    <h1>Projekt xx</h1>
    <br />

    <h3>Konfigurering del 1</h3>
    <p>API</p>
    <p>Tasks</p>

    <card>
      <codeBlock :code="codeExample2" />
    </card>
    <br />

    <h1>{{ title }}</h1>
    <br />

    <h3>Definition</h3>
    <p>Namespace: System.Collections.Generic</p>
    <p>Assembly: System.Collections.dll</p>

    <card>
      <codeBlock :code="codeExample" />
    </card>
    <br />

    <alert type="primary" :title="alertTitle" :text="alertText" />
  </div>
</template>

<script>
import card from "@/components/common/card.vue";
import alert from "@/components/common/alert.vue";
import codeBlock from "@/components/mainContent/codeBlock.vue";
import loader from "@/components/common/loader.vue";

export default {
  name: "mainContent",
  components: {
    card,
    alert,
    codeBlock,
    loader,
  },
  data: function () {
    return {
      alertTitle: "Varning för null",
      alertText: `Aww yeah, you successfully read this important alert message. This example
      text is going to run a bit longer so that you can see how spacing within
      an alert works with this kind of content.`,
      title: "HashSet<T> Class",
      codeExample: `

HashSet<int> evenNumbers = new HashSet<int>();
HashSet<int> oddNumbers = new HashSet<int>();

for (int i = 0; i < 5; i++)
{
    // Populate numbers with just even numbers.
    evenNumbers.Add(i * 2);

    // Populate oddNumbers with just odd numbers.
    oddNumbers.Add((i * 2) + 1);
}

Console.Write("evenNumbers contains {0} elements: ", evenNumbers.Count);
DisplaySet(evenNumbers);

Console.Write("oddNumbers contains {0} elements: ", oddNumbers.Count);
DisplaySet(oddNumbers);

// Create a new HashSet populated with even numbers.
HashSet<int> numbers = new HashSet<int>(evenNumbers);
Console.WriteLine("numbers UnionWith oddNumbers...");
numbers.UnionWith(oddNumbers);

Console.Write("numbers contains {0} elements: ", numbers.Count);
DisplaySet(numbers);

void DisplaySet(HashSet<int> collection)
{
    Console.Write("{");
    foreach (int i in collection)
    {
        Console.Write(" {0}", i);
    }
    Console.WriteLine(" }");
}

/* This example produces output similar to the following:
* evenNumbers contains 5 elements: { 0 2 4 6 8 }
* oddNumbers contains 5 elements: { 1 3 5 7 9 }
* numbers UnionWith oddNumbers...
* numbers contains 10 elements: { 0 2 4 6 8 1 3 5 7 9 }`,
      codeExample2: `
    function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};`,
    };
  },
};
</script>