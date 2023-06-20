<script setup>
import pb from '../../pocket.config.js';
import { ref, onMounted } from 'vue';
// collect data from pocketbase
try {
  records = await pb.collection('projects').getFullList();
} catch (error) {}

const counter = useState('counter', () => 0);

function ajouterLigne() {
  if (typeof this.i == 'undefined') this.i = 2;
  var doc = document.getElementById('placement'); 

  const row1 = document.createElement('div');
  row1.className = 'row insert';
  
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'form-fieldset ui-input __first';
  
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'player' + i.toString();
  input.id = 'username';
  input.tabIndex = '0';

  const label = document.createElement('label');
  label.htmlFor = 'username';
  label.text = 'username';
  label.id = 'label';

  const span = document.createElement('span');
  span.dataText = 'Pseudonyme';
  var texte = 'Pseudonyme';
  span.innerHTML = texte; 
  
  i += 1;
  doc.appendChild(row1);
  row1.appendChild(fieldset);
  fieldset.appendChild(input);
  fieldset.appendChild(label);
  label.appendChild(span);

  const parent = document.getElementById('nbJoueurs');
  parent.value = i;
}
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header> Ajout de Projet </template>
    <template #content>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <form action="#" class="custom-validation">
                <div class="form-group">
                  <label>Intitulé du Projet</label>
                  <div>
                    <input type="text" class="form-control" placeholder="Min 6 chars." />
                  </div>
                </div>
                <div class="form-group">
                  <label>Domaine</label>
                  <div>
                    <select name="" class="form-control">
                      <option value="" selected>Selectionné une valeur</option>
                      <option value="">test</option>
                      <option value="">test</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label>Sous Domaine</label>
                  <div>
                    <select name="" class="form-control">
                      <option value="" selected>Selectionné une valeur</option>
                      <option value="">test</option>
                      <option value="">test</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <h5>Liste des Membres</h5>
                    <div ref="inputContainer" class="row">
                      <!-- <div class="col-6">
                        <input type="text" class="form-control" required placeholder="Min 6 chars." />
                      </div>
                      <div class="col-6">
                        <input type="text" class="form-control" required placeholder="Min 6 chars." />
                      </div> -->
                    </div>
                  </div>
                </div>
                <br />
                <div class="form-group mb-0">
                  <div>
                    <button type="submit" class="btn btn-primary waves-effect waves-light mr-1">Submit</button>
                    <button type="reset" class="btn btn-secondary waves-effect">Cancel</button>
                  </div>
                </div>
              </form>
              <button>test</button>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
