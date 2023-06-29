<script setup>
import pb from '../../pocket.config.js';
// collect data from pocketbase
try {
  records = await pb.collection('projects').getFullList();
} catch (error) {}

let i = 0;

function ajouterLigne() {
  i += 1;

  const doc = document.getElementById('inputContainer');

  const row1 = document.createElement('div');
  row1.className = 'col-6';

  const row2 = document.createElement('div');
  row2.className = 'col-6';

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'member' + i.toString();
  input.className = 'form-control mb-2';

  const input0 = document.createElement('input');
  input0.type = 'text';
  input0.name = 'task' + i.toString();
  input0.className = 'form-control mb-2';

  doc.appendChild(row1);
  doc.appendChild(row2);
  row1.appendChild(input);
  row2.appendChild(input0);
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
              <div class="custom-validation">
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
                    <div id="inputContainer" class="row">
                      <div class="col-6">
                        <label for="tach">Membre</label>
                        <input
                          type="text"
                          name="member0"
                          class="form-control mb-2"
                          required
                          placeholder="Nom de l'exécutant"
                        />
                      </div>
                      <div class="col-6">
                        <label for="tach">Tache</label>
                        <input
                          type="text"
                          name="task0"
                          class="form-control mb-2"
                          required
                          placeholder="Intitulé de la tâche"
                        />
                      </div>
                    </div>
                    <br />
                    <button class="btn btn-warning waves-effect" @click="ajouterLigne">Ajouter une Tâche</button>
                  </div>
                </div>
                <br />
                <div class="form-group mb-0">
                  <div>
                    <button type="submit" class="btn btn-primary waves-effect waves-light mr-1">Submit</button>
                    <button type="reset" class="btn btn-secondary waves-effect">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
